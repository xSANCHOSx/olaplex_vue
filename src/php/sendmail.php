<?
// Имя файла, в котором хранится счетчик
$file_counter = "counter.txt";

// Читаем текущее значение счетчика
if (file_exists($file_counter)) {
    $fp = fopen($file_counter, "r");
    $counter = fread($fp, filesize($file_counter));
    fclose($fp);
} else {
    $counter = 0;
}

// Увеличиваем счетчик на единицу
$counter++;

// Сохраняем обновленное значение счетчика
$fp = fopen($file_counter, "w");
fwrite($fp, $counter);
fclose($fp); 

$mail = $_POST["order"];
$subject = "Заказ с сайта Olaplex #". $counter ." (".date("d.m.Y H:i").")";

$mail = str_replace("<td></td>", "",$mail);
$mail = str_replace("valTrFal_true", "",$mail);
$mail = str_replace("valTrFal_disabled", "",$mail);
$mail = //str_replace(["Нажимая","на","кнопку,","вы","даете","согласие","на","обработку","персональных","персольных","данных"], [""],$mail);
  str_replace(["Нажимая на кнопку, вы даете ","согласие на обработку персональных данных"], [""],$mail);
$mail = strip_tags($mail, "<b><div><table><tbody><tr><td><html><body><style><h1><th><br>");
$mail = preg_replace('/<div[^>]+class="basket_num_buttons"[^>]*>.*?<\/div>/s', '', $mail);
$mail = preg_replace("/<([a-z][a-z0-9]*)[^>]*?(\/?)>/i",'<$1$2>', $mail);
$mail = preg_replace("/<td[^>]*>[\s|&nbsp;]*<\/td>/", "", $mail);
$mail = str_replace("Электроня", "Электронная",$mail);

$template = "<html>
<style>
*
{ font-family: Arial;}
table
{ border-collapse: collapse; margin-top:25px; }
td
{ padding: 5px; border: 1px solid #000; text-align: center;}
th
{
background: #999; padding: 5px;
}
</style>
<body>
<h1>".$subject."</h1>
".$mail."</body></html>";

$template .= "<hr> 
<table align='left' border='1' cellpadding='1' cellspacing='1' style='width:100%'>
	<caption>
	<h1>ДОСТАВКА</h1>
	</caption>
	<tbody style='text-align:justify'>
		<tr>
			<td>
			<div class='h5 b1c-name' style='box-sizing: border-box; font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-weight: 900; line-height: 1.1; color: rgb(186, 56, 92); margin-top: 10px; margin-bottom: 10px; font-size: 18px; text-align: center;'>Москва</div>

			<p style='text-align:justify'><span style='color:rgb(186, 56, 92)'>Бесплатная доставка</span>&nbsp;в пределах МКАД при сумме заказа&nbsp;свыше&nbsp;<span style='color:rgb(186, 56, 92)'>2500 руб.</span></p>

			<p style='text-align:justify'>Стоимость доставки в пределах МКАД -&nbsp;<span style='color:rgb(186, 56, 92)'>250 руб.</span></p>

			<p style='text-align:justify'>Стоимость доставки за пределы МКАД - рассчитывается индивидуально.</p>
			</td>
			<td>
			<div class='h5 b1c-name' style='box-sizing: border-box; font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-weight: 900; line-height: 1.1; color: rgb(186, 56, 92); margin-top: 10px; margin-bottom: 10px; font-size: 18px; text-align: center;'>СПБ</div>

			<p style='text-align:justify'><span style='color:rgb(186, 56, 92)'>Бесплатная доставка</span>&nbsp;в пределах КАД при сумме заказа&nbsp;свыше&nbsp;<span style='color:rgb(186, 56, 92)'>5000 руб.</span></p>

			<p style='text-align:justify'>Стоимость доставки в пределах КАД -&nbsp;<span style='color:rgb(186, 56, 92)'>300 руб.</span></p>

			<p style='text-align:justify'>Стоимость доставки за пределы КАД - рассчитывается индивидуально.</p>
			</td>
		</tr>
		<tr>
			<td>
			<div class='h5 b1c-name' style='box-sizing: border-box; font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-weight: 900; line-height: 1.1; color: rgb(186, 56, 92); margin-top: 10px; margin-bottom: 10px; font-size: 18px; text-align: center;'>Регионы</div>

			<p style='text-align:justify'>Курьером до двери компанией СДЭК &ndash; стоимость&nbsp;<span style='color:rgb(186, 56, 92)'>уточняйте у оператора.</span></p>

			<p style='text-align:justify'>Почтой России 1 класс -&nbsp;<span style='color:rgb(186, 56, 92)'>350 руб.</span></p>
			</td>
			<td>
			<div class='h5 b1c-name' style='box-sizing: border-box; font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-weight: 900; line-height: 1.1; color: rgb(186, 56, 92); margin-top: 10px; margin-bottom: 10px; font-size: 18px; text-align: center;'>Самовывоз</div>

			<p style='text-align:justify'>Москва &ndash;&nbsp;<span style='color:rgb(186, 56, 92)'>120 рублей.</span></p>

			<p style='text-align:justify'>СПБ: -&nbsp;<span style='color:rgb(186, 56, 92)'>150 рублей.</span></p>

			<p style='text-align:justify'>Регионы: более 1000 пунктов &ndash; стоимость уточняйте у оператора.</p>
			</td>
		</tr>
	</tbody>
</table>";
// Clear form

$head = "<tr><th>Название</th><th>Цена</th><th>Кол-во</th></tr>";
$template = str_replace ( "<tbody>" ,"<tbody>".$head, $template);

$domain = "olaplex.ru";
$from = "no-reply@". $domain;
$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: ". $from . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";


$success = mail("xxxsanchosxxx@gmail.com", $subject, $template, $headers);
//echo ($success) ? 'true' : 'false';
if ($success == true)
{
    echo "ok";
}
else
{
    echo "error";
}
$success = mail($_POST['email'], $subject, $template, $headers);
if ($success == true)
{
    echo "";
}
else
{
    echo "error";
}

?>