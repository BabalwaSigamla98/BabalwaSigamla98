USE [Project]
GO
/****** Object:  Table [dbo].[ProductsTable]    Script Date: 2022/06/27 08:36:08 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ProductsTable]') AND type in (N'U'))
DROP TABLE [dbo].[ProductsTable]
GO
/****** Object:  Table [dbo].[ProductsTable]    Script Date: 2022/06/27 08:36:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductsTable](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Productname] [nvarchar](max) NOT NULL,
	[Price] [decimal](18, 4) NOT NULL,
	[Image] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_ProductsTable] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[ProductsTable] ON 

INSERT [dbo].[ProductsTable] ([Id], [Productname], [Price], [Image]) VALUES (1, N'Brutal Fruit8', CAST(79.0000 AS Decimal(18, 4)), N'https://www.checkers.co.za/medias/10536457PK1-20190726-Media-checkers515Wx515H?context=bWFzdGVyfGltYWdlc3wzMTMwMzR8aW1hZ2UvcG5nfGltYWdlcy9oZjMvaDM3Lzg4NTk4NTA2NzAxMTAucG5nfDNjOTY0YjY2MzhlYTQ2OTkxNGQ3MDhiMzA1MjBjZjQ4ZWUxZmJiMzM0ODQwMWNjNmY0ZDdiYTE1YjJmMDU5NjY')
INSERT [dbo].[ProductsTable] ([Id], [Productname], [Price], [Image]) VALUES (2, N'Savanna', CAST(89.0000 AS Decimal(18, 4)), N'https://www.checkers.co.za/medias/10394600PK2-20190726-Media-checkers515Wx515H?context=bWFzdGVyfGltYWdlc3wyODIzMjR8aW1hZ2UvcG5nfGltYWdlcy9oMmYvaDhiLzg4NTg5NDQ5OTUzNTgucG5nfGY0M2E4YzdiMjJmZjJkN2EzYzMyOGI5MWM4YTAzZGMwMDNhMGRkNzE4YWQyNWE1NjA0NDU2YjMwM2YxMmZmZjU')
INSERT [dbo].[ProductsTable] ([Id], [Productname], [Price], [Image]) VALUES (3, N'Pine Twist', CAST(100.0000 AS Decimal(18, 4)), N'https://media.takealot.com/covers_images/b1d2480ee7404a1cbe9fa9cd65239de0/s-pdpxl.file')
INSERT [dbo].[ProductsTable] ([Id], [Productname], [Price], [Image]) VALUES (4, N'Spin', CAST(69.0000 AS Decimal(18, 4)), N'https://www.checkers.co.za/medias/10136579PK1-checkers515Wx515H?context=bWFzdGVyfGltYWdlc3wzNzgzNTZ8aW1hZ2UvcG5nfGltYWdlcy9oMzMvaGUxLzk5NzcyNTU1MjY0MzAucG5nfDVjNmNjY2M5NmIwYTEwOTc2N2M0OGY1MzJhYWIxODUyYzM3N2I1NmRiMzI4MGU5NTg1ZjhhMGNiM2IwMTA5ZmE')
SET IDENTITY_INSERT [dbo].[ProductsTable] OFF
GO
