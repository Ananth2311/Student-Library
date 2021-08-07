// login input generate random 
practice Text Area and input on  JS 
<div>
    <input type="text" id="user_id" placeholder="user id"><br>
    <input type="text" id="user_password" placeholder="password"><br>
    <textarea name="message" id="message2" cols="30" rows="10" placeholder="message.."></textarea><br>
    <button onclick="btnF()">send</button><br>
    <p id="para3"></p>
    <script>
        function btnF(){
            var user_id = document.getElementById('user_id').value;
            var user_password = document.getElementById('user_password').value;
            var msg = document.getElementById('message2').value;
            var outp = `Sent details : <br> user id: ${user_id}<br>user password: ${user_password}<br>message: ${msg}`;
            document.getElementById('para3').innerHTML = outp;
        }
    </script>
</div><br></br>