using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using SuperHeroAPI.Data;


namespace SuperHeroAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {

        private readonly DataContext context;
        private readonly IConfiguration configuration;
        public LoginController(DataContext context, IConfiguration configuration)
        {
            this.context = context;
            this.configuration = configuration;
        }
        [HttpPost]
        public async Task<ActionResult<String>> Login(Login logins)
        {
            var user = context.UserTable.Where(x => x.Username == logins.Username && x.Password == logins.Password)
                .FirstOrDefault();
            if (user == null) return BadRequest("The user doesn't exist");

            var token = GenerateToken(user);
            return Ok(token);
        }

        private string GenerateToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(configuration["Jwt:Secret"]);
            var issuer = this.configuration["Jwt:Issuer"];
            var audience = this.configuration["Jwt:Audience"];

            var claimIdentity = new ClaimsIdentity(new[]
            {
                new Claim("Id", user.Id.ToString()),
                new Claim("Username", user.Username)
            });
            var signingCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = claimIdentity,
                Issuer = issuer,
                Audience = audience,
                Expires = DateTime.Now.AddHours(1),
                SigningCredentials = signingCredentials,

            };
            var securityToken = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(securityToken);
        }
    }
}
