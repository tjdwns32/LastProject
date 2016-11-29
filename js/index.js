/**
 * Created by juni0_000 on 2016-11-24.
 */
function searchBook(){
    //만약 enter key(13번key가  enter)가 입력 되었을 경우 실행
    if(event.keyCode == 13){
        //ajax를 호출 (jsonp방식으로)
        $.ajax({
            url : "http://localhost:8080/last/list",
            type : "GET",
            dataType : "jsonp",
            jsonp : "callback",
            data : {
                keyword : $("#keyword").val()
            },
            success : function(result){
                $("tbody").empty();
                for(var i =0 ;i<result.length;i++) {
                    var tr = $("<tr></tr>");
                    var img = $("<img />").attr("src", result[i].bimgurl);
                    var imgtd = $("<td></td>").append(img);
                    var titletd = $("<td></td>").text(result[i].btitle);
                    var authortd = $("<td></td>").text(result[i].bauthor);
                    var pricetd = $("<td></td>").text(result[i].bprice);
                    /**
                     * <td>
                     *     <input type = "button" value = "삭제">
                     * </td>
                     */
                    var del = $("<input />").attr("type","button").attr("value","삭제").addClass("btn btn-danger");
                    del.click(function(){
                        //1.화면에서 지워요
                        //this => 현재 이벤트가 발생한 객체
                        $(this).parent().parent().remove();
                        //2.AJAX로 DB에서 지워요
                    });
                    var deltd = $("<td></td>").append(del);
                    tr.append(imgtd);
                    tr.append(titletd);
                    tr.append(authortd);
                    tr.append(pricetd);
                    tr.append(deltd);
                    $("tbody").append(tr);
                }
            },
            error : function(){
                alert("이상해요!");
            }
        });
    }
}