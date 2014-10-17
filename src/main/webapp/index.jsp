<html>

<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="js/base.js"></script>
</head>

<body>

<h2>Hello World!</h2>

<p class="navn"></p>
<p class="melding"></p>

<div class="sendpifmeldinginclude">
	<form id="sendpifmelding" action="#">
		Type: <select>
		  <option value="Ingen">Ingen</option>
		  <option value="Fritekst">Fritekst</option>
		  <option value="Lengde">Lengde</option>
		  <option value="Himmelretning">Himmelretning</option>
		  <option value="Stopp">Stopp</option>
		</select><br>
		
		Innhold: <input type="text" name=""><br>
		<input type="submit" name="submit">
	</form>
</div>
</body>
</html>
