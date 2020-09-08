<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:output method="html"/>
	
<xsl:template match="/">
<html>
<head><title>hw3.xsl</title></head>
<body>
	<h1>List of Clients</h1>	

<table border="1">
	<tr>
	<th>Name</th>
	<th>Phone</th>
	<th>Email</th>
	<th>Account Total</th>
</tr>
	<xsl:for-each select="List/Clients">
	<tr>
		<td><xsl:value-of select="Name"/></td>
		<td><xsl:value-of select="Phone"/></td>
		<td><xsl:value-of select="Email"/></td>
		<xsl:choose>
			<xsl:when test="Account_Total !=80000">
				<td><xsl:value-of select="Account_Total"/></td>		
	
			</xsl:when>	
		<xsl:otherwise>		
		   <td bgcolor="red">
</td>
		</xsl:otherwise>
		</xsl:choose>	
	</tr>
	</xsl:for-each>
</table>
</body>
</html>

</xsl:template>
</xsl:stylesheet>
