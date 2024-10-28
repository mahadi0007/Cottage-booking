function doQuery()
{
//alert('doQuery...');	
	if((document.getElementById('tf01').value!='')&&(document.getElementById('tf02').value!='')&&(document.getElementById('tf03').value!='')&&(document.getElementById('tf04').value!=''))
	{
		var q_str = 'reqType=doQuery';
		var querysssss= '		PREFIX : <http://localhost:8080/CottageBookingService/onto#>\r\n"
		       		+ "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\r\n"
		       		+ "\r\n"
		       		+ "SELECT ?cottageName ?address ?places ?bedrooms ?distanceToLake ?nearestCity ?distanceToCity ?imageURL\r\n"
		       		+ "WHERE {\r\n"
		       		+ "    ?cottage rdf:type :Cottage .\r\n"
		       		+ "    ?cottage :cottageName ?cottageName .\r\n"
		       		+ "    ?cottage :address ?address .\r\n"
		       		+ "    ?cottage :places ?places .\r\n"
		       		+ "    ?cottage :bedrooms ?bedrooms .\r\n"
		       		+ "    ?cottage :distanceToLake ?distanceToLake .\r\n"
		       		+ "    ?cottage :nearestCity ?nearestCity .\r\n"
		       		+ "    ?cottage :distanceToCity ?distanceToCity .\r\n"
		       		+ "    OPTIONAL { ?cottage :imageURL ?imageURL } .\r\n"
		       		+ "}'

		q_str = q_str+'&param01='+document.getElementById('tf01').value;
		q_str = q_str+'&param02='+document.getElementById('tf02').value;
		q_str = q_str+'&param03='+document.getElementById('tf03').value;
		q_str = q_str+'&param04='+document.getElementById('tf04').value;
		doAjax('BookingServlet',querysssss,'doQuery_back','post',0);
	}else
	{
		alert('Please, fill all the search fields...errerer');
	}
}

function doQuery_back(result)
{
alert('result:'+result+"falzlami");

        // Toggle visibility
        if (result === "Done") {
            contentDiv.style.display = "none"; // Show the div
        } else {
            contentDiv.style.display = "block"; // Hide the div
        }
   

}





