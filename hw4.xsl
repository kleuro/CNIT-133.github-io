<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
	xmlns:fn="http://www.w3.org/2005/xpath-functions"	
	xmlns:xdt="http://www.w3.org/2005/xpath-datatypes"
	xmlns:fo="http://www.w3.org/1999/XSL/Format">	
<xsl:output method="html"/>	
<xsl:template match="/">
	<head><title>hw4.xsl</title></head>
<body>	
	<h1>ABC Financial Startup</h1>	
	<img src="css/hw4.jpg"></img>
	<p>We currently have <xsl:value-of select="count(List/Client)"/> customer.</p>
	<p>Here is our client name list <xsl:for-each select="List/Client">, <xsl:value-of select="Name"/></xsl:for-each>.</p>
	<p>Company establish more than 7 years result by owner name<xsl:apply-templates select="List/Client[Years &gt;6]"/><xsl:value-of select="Name"/>.</p>	
</body>	
</xsl:template>
	<xsl:template match="Client">, <xsl:value-of select="Name"/></xsl:template>
</xsl:stylesheet>


