<html>

<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript" src="js/base.js"></script>
</head>

<body>

<table width="100%" border="1">
    <thead>
    <th>Post nummer</th>
    <th>Post navn</th>
    <th>Longitude</th>
    <th>Latitude</th>
    </thead>
    <tbody>
    <tr>
        <td class="gjeldende_postNummer"></td>
        <td class="gjeldende_navn"></td>
        <td class="gjeldende_longitude"></td>
        <td class="gjeldende_latitude"></td>
    </tr>
    </tbody>
</table>

<table width="100%" border="1">
    <thead>
    <th>Latitude</th>
    <th>Longitude</th>
    <th>Infisert</th>
    <th>Tid</th>
    <th>ER Infisert ???</th>
    </thead>
    <tbody>
    <tr>
        <td class="posisjon_latitude"></td>
        <td class="posisjon_longitude"></td>
        <td class="posisjon_infisert"></td>
        <td class="posisjon_tid"></td>
        <td class="posisjon_erinfisert"></td>
    </tr>
    </tbody>
</table>


<p class="koder"></p>

<p class="navn"></p>
<p class="melding"></p>

<form id="sendpifmelding" action="#">
	Type: <select id="selectType">
	  <option value="Ingen">Ingen</option>
	  <option value="Fritekst">Fritekst</option>
	  <option value="Lengde">Lengde</option>
	  <option value="Himmelretning">Himmelretning</option>
	  <option value="Stopp">Stopp</option>
	</select><br>
	
	Innhold: <input type="text" name="txtInnhold"><br>
	<input type="submit" name="submit" value="Send">
</form>
</body>
</html>
