<?php
include_once 'dbconfig.php';
if(!$user->is_loggedin())
{
 $user->redirect('login.php');
}
$user_id = $_SESSION['user_session'];
$stmt = $DB_con->prepare("SELECT * FROM users WHERE user_id=:user_id");
$stmt->execute(array(":user_id"=>$user_id));
$userRow=$stmt->fetch(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" href="../../favicon.ico">
        <link href="css/styles.css" rel="stylesheet">

        <title>Create Play</title>

        <!-- Bootstrap core CSS -->
        <link href="bootstrap-3.3.5/dist/css/bootstrap.min.css" rel="stylesheet">

        <script src="bootstrap-3.3.5/docs/assets/js/ie-emulation-modes-warning.js"></script>
        
        <script src="js/phaser.js"></script>
        <script src="src/Editor.js"></script>
        <script src="src/Icon.js"></script>
        <script src="src/Handle.js"></script>

        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->    
</head>

<body>

        <nav id="navbar2" class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" id=logo href="index.html">Rugby Playbook</a>
        </div>
        <div id="navbar" id="navbar2" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="Laws.html">Laws</a></li>
            <li><a href="plays.html">Plays</a></li>
            <li id="active" class="active"><a href="createPlay.html">Create Play</a></li>
            <li><a href="logout.php?logout=true">logout</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

    <div class="container">

      <div class="starter-template">
        <p class="lead">Create your own plays.</p>
         <div id="game">
          <script type="text/javascript">
          var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');// just changed from CANVAS To AUTO
          game.state.add('Game', WaveForms, true);</script>
        </div>
      </div><!--/.start-template -->
      </div><!-- /.container -->
    
     <footer class="footer">
      <div class="container">
        <p class="text-muted">&copy; 2015 Clément Siess, Ian Reineck, Steven Shneider. All rights reserved.</p>
      </div>
    </footer>
    
    <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/velocity/0.11.6/jquery.velocity.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/velocity/0.11.6/velocity.ui.js'></script>
    <script src='http://julian.com/research/blast/build/jquery.blast.js'></script>
    <script src="js/blast.js"></script>
    
        <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="bootstrap-3.3.5/dist/js/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="bootstrap-3.3.5/docs/assets/js/ie10-viewport-bug-workaround.js"></script>
    
</body>
</html>













