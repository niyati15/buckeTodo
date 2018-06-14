$(function () {
    var userId = sessionStorage.getItem('id');
    var linkNumber = 0;

    $.get("/api/user/:id/bucket/:bucketId/bookmark", function (res) {
        MSFIDOSignatureAssertion(res);
    });

    // iterate through json object we got from query call
    function iteration(obj) {
        var bookmarkArray = [];
        for (var i = 0; i < obj.length; i++) {
            var currBookmark = obj[i].name;
            bookmarkArray.push(currBookmark);

            var bookmarkInfo = {
                name: obj[i].name
                description: obj[i].description
                link: obj[i].url
                priority: obj[i].priority
            };

            appendHTML(bookmarkInfo);
        }
    }

	// append new bucket card onti DOM
	function appendHTML(bookmarkInfo) {
		// console.log(bucketName);
		var tableBody = $(".addBookmarks");
        var bookmarkView =  "<tr>" +
                                "<th scope='row'> " + linkNumber + " </th> " + 
                                "<td>" + bookmarkInfo.name + "</td>" +
                                "<td>" + bookmarkInfo.description + "</td>" +
                                "<td>" + bookmarkInfo.link + "</td>" +
                                "<td>" + bookmarkInfo.priority + "</td>"
                            "</tr>"
        




        tableBody.append(bookmarkView);
        linkNumber ++;
	}



});


// <tr>
// <th scope="row">1</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>5</td>
// </tr>