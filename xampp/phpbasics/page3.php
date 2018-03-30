<!-- 입력값 GET으로 받기 액션값이 GET 반환 -->
<form method="POST" action="register.php?abc=10&pp=1"> 
    ID: <input type="text" name="id"/><br/>
    NAME: <input type="text" name="name"/><br/>
    AMOUNT: <input type="text" name="amount"/><br/>
    <!-- password값은 반환 안함 -->
    PW: <input type="password" name="pass"/><br/>
    <input type="hidden" name="secret" value="5"/>
    <button type="submit">Atack
</form>