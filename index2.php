<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="style.css">
  <script type="text/javascript" src="js.js"></script>
  <title>login</title>
</head>
<body>

  <section class="back">
  <!--   <div class="pist">
      <p >if(2<3){</p>
        <p style="display: flex;">var username = document.getanonimusdate();</p>
        <p> var  password = document.getMoondays();</p>
        <p> password + (222); </p>
        <p>conlose.log("username","password");</p>
        <button onclick="res()" style="background: transparent; color: #284;padding: 0px; border: none; ">result ::</button>


      </div> -->
      <div class="container">
        <div class="frame">
          <div class="nav">
              <img src="1.svg">

              <p class="btn">log in</p>
          <!--   <ul class="links">

            </ul> -->
          </div>
          <div ng-app ng-init="checked = false">
            <!-- onsubmit="return ver()" esto va en el form para javascript -->
            <form class="form-signin"  action="validar.php"  method="POST"  name="form"  >
              <label for="username">AGENT ID</label>
              <input class="form-styling" type="password" id="user" name="usuario" placeholder="" autocomplete="off" />
              <label for="password">Password</label>
              <input class="form-styling" type="password" onkeypress=""  id="pas" name="contraseña" autocomplete="off" placeholder=""/>
              <div class="text" id="IDhere"></div>
              <input type="checkbox" id="checkbox"/>
            <!--   <label for="checkbox" ><span class="ui"></span>Keep me signed in</label> -->
              <div class="btn-animate"> 
                <input class="btn-signin" type="submit" value="Send">
                <div class="error">
                  <p>you dont't have acess</p>
                </div>

              </div>

            </form>



          </div>

      <!--     <div class="forgot">
            <a href="#">Forgot your password?</a>
          </div>
 -->

        </div>


      </a>
    </div>
  </section>
</body>
</html>