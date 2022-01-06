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


$subject = "Заказ с сайта Olaplex #". $counter ." (".date("d.m.Y H:i").")";

//$mail = str_replace("<td></td>", "",$mail);
//$mail = strip_tags($mail, "<b><div><table><tbody><tr><td><html><body><style><h1><th><br>");
//$mail = preg_replace("/<([a-z][a-z0-9]*)[^>]*?(\/?)>/i",'<$1$2>', $mail);
//$mail = preg_replace("/<td[^>]*>[\s|&nbsp;]*<\/td>/", "", $mail);
//$mail = str_replace("Электроня", "Электронная",$mail);

$mail = '<style type="text/css">
.tg  {border-collapse:collapse;border-color:#93a1a1;border-spacing:0;}
.tg td{background-color:#fdf6e3;border-color:#93a1a1;border-style:solid;border-width:1px;color:#002b36;
  font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{background-color:#657b83;border-color:#93a1a1;border-style:solid;border-width:1px;color:#fdf6e3;
  font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-alz1{background-color:#eee8d5;text-align:left;vertical-align:top}
.tg .tg-73oq{border-color:#000000;text-align:left;vertical-align:top}
</style>';
$mail .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$mail .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . strip_tags($_POST['name']) . "</td></tr>";
$mail .= "<tr><td><strong>ФИО:</strong> </td><td>" . strip_tags($_POST['name']) . "</td></tr>";
$mail.= "<tr><td><strong>Телефон:</strong> </td><td>" . strip_tags($_POST['phone']) . "</td></tr>";
$mail .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($_POST['email']) . "</td></tr>";
$mail .= "<tr><td><strong>Адрес доставки:</strong> </td><td>" . strip_tags($_POST['adress']) . "</td></tr>";
$mail.= "</table>";
$mail .= '<table class="tg">
<thead>
  <tr>
    <th class="tg-73oq">Название </th>
    <th class="tg-73oq">Цена</th>
    <th class="tg-73oq">Количество</th>
  </tr>
</thead>
<tbody>';
foreach($_POST['products'] as $products){
    $mail .='<tr>';
    $mail .='<td class="tg-alz1">'. $products['catalog_number'] . $products['name'] . '</td>';
    $mail .='<td class="tg-alz1">'. $products['price'] . '</td>';
    $mail .='<td class="tg-alz1">'. $products['quantity']  . '</td>';
    $mail .='</tr>';
}
$mail .= '</tbody>
            </table>';
$mail .= '<div>Общая сумма заказа:' . $products['price']* $products['quantity'] . '</div>';
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
if ($success == true)
{
    echo "ok";
}
else
{
    echo "error";
}
?>