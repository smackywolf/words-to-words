walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bThe Cloud\b/g, "My Butt");
	v = v.replace(/\bThe cloud\b/g, "My butt");
	v = v.replace(/\bthe Cloud\b/g, "my Butt");
	v = v.replace(/\bthe cloud\b/g, "my butt");
	
	// add SJW bullshit
	v = v.replace(/\bsjws\b/g, "skeletons");
	v = v.replace(/\bSJWs\b/g, "skeletons");
	v = v.replace(/\bSjws\b/g, "skeletons");
	v = v.replace(/\bSJws\b/g, "skeletons");
	v = v.replace(/\bSJWs\b/g, "skeletons");
	// also bad grammar
	v = v.replace(/\bsjw's\b/g, "skeletons");
	v = v.replace(/\bSJW's\b/g, "skeletons");
	v = v.replace(/\bSjw's\b/g, "skeletons");
	v = v.replace(/\bSJw's\b/g, "skeletons");
	v = v.replace(/\bSJW's\b/g, "skeletons");
	// lol
	v = v.replace(/\bsjw\b/g, "skeleton");
	v = v.replace(/\bSJW\b/g, "skeleton");
	v = v.replace(/\bSjw\b/g, "skeleton");
	v = v.replace(/\bSJw\b/g, "skeleton");
	v = v.replace(/\bSJW\b/g, "skeleton");
	
	
	// add Big Data
	v = v.replace(/\bBig Data is\b/g, "Big Dicks are");
	v = v.replace(/\bbig data is\b/g, "big dicks are");
	v = v.replace(/\bbig Data is\b/g, "big Dicks are");
	v = v.replace(/\bBig data is\b/g, "Big dicks are");
	v = v.replace(/\bBig Data\b/g, "Big Dicks");
	v = v.replace(/\bbig data\b/g, "big dicks");
	v = v.replace(/\bbig Data\b/g, "big Dicks");
	v = v.replace(/\bBig data\b/g, "Big dicks");
	
	
	// add buttcoin crap
	v = v.replace(/\bBITCOINS\b/g, "BUTTCOINS");
	v = v.replace(/\bBitcoins\b/g, "Buttcoins");
	v = v.replace(/\bbitcoin\b/g, "buttcoin");
	v = v.replace(/\bBTC\b/g, "Buttcoin");
	v = v.replace(/\bBitCoin\b/g, "ButtCoin");
	v = v.replace(/\bBitcoin\b/g, "Buttcoin");
	
	// "the internet of things" is pretty fuckin dumb, right?
	v = v.replace(/\bThe internet of things\b/g, "The internet of dongs");
	v = v.replace(/\bThe Internet Of Things\b/g, "The Internet Of Dongs");
	v = v.replace(/\bThe internet of Things\b/g, "The internet of Dongs");
	v = v.replace(/\bThe Internet of things\b/g, "The Internet of dongs");
	v = v.replace(/\bThe Internet of Things\b/g, "The Internet of Dongs");
	
	// HE MAN
	v = v.replace(/\bThe patriachy\b/g, "Castle Grayskull");
	v = v.replace(/\bThe Patriachy\b/g, "Castle Grayskull");
	v = v.replace(/\bthe Patriachy\b/g, "Castle Grayskull");
	v = v.replace(/\bTHE PATRIACHY\b/g, "Castle Grayskull");
	v = v.replace(/\bpatriachy\b/g, "Castle Grayskull");
	v = v.replace(/\bPATRIACHYs\b/g, "Castle Grayskull");
	v = v.replace(/\bPatriachy\b/g, "Castle Grayskull");
	
	textNode.nodeValue = v;
}


