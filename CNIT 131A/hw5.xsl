<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:template match="/">

<head><title>hw3.xsl</title></head>
<body>
	<h1>List of Clients</h1>	

<table border="1">
<tr>
	<th>Name</th>
	<th>Phone</th>
	<th>Email</th>
	<th>Account_Total</th>
</tr>
	<xsl:for-each select="List/Client"><xsl:apply-templates select="Client [Account_Total &lt; 80000]"/>
	<tr>
		<td><xsl:value-of select="Name"/></td>
		<td><xsl:value-of select="Phone"/></td>
		<td><xsl:value-of select="Email"/></td>
		<td><xsl:value-of select="Account_Total"/></td>
	</tr>
	</xsl:for-each>
</table>
</body>
</xsl:template>
</xsl:stylesheet>


