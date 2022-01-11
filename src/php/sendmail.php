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
$mail_obj =  json_decode(file_get_contents("php://input"), true);

$subject = "Заказ с сайта Olaplex #". $counter ." (".date("d.m.Y H:i").")";

$mail = '<h2 style="margin-bottom: 20px;text-align: center;">Контактная информация</h2>';
$mail .= '<table rules="all" style="width: 100%;border: 1px solid grey;" cellpadding="10">';
$mail .= '<thead>
  <tr>
    <th>ФИО:</th>
    <th>Телефон:</th>
    <th>Email:</th>
    <th>Адрес доставки:</th>
  </tr>
</thead>';
$mail .= "<tr><td>" . $mail_obj['productOrder']['fio'] . "</td>";
$mail .= "<td>" . $mail_obj['productOrder']['phone'] . "</td>";
$mail .= "<td>" . $mail_obj['productOrder']['email'] . "</td>";
$mail .= "<td>" . $mail_obj['productOrder']['adress'] . "</td></tr>";
$mail .= "</table>";
$mail .= '<h2 style="margin: 20px auto;text-align: center;">Заказ</h2>';
$mail .= '<table rules="all" style="width: 100%;border: 1px solid grey;" cellpadding="10">';
$mail .= '<thead>
  <tr>
    <th>Название товара:</th>
    <th>Цена:</th>
    <th>Количество:</th>
  </tr>
</thead>';

$sum = 0;
foreach( $mail_obj['productOrder']['products'] as $products){
    $mail .='<tr>';
    $mail .='<td>'. $products['catalog_number'] . $products['name'] . '</td>';
    $mail .='<td>'. $products['price'] . '</td>';
    $mail .='<td>'. $products['quantity']  . '</td>';
    $mail .='</tr>';
    $sum += (float) ($products['price']* $products['quantity']);
}
$mail .= '</table>';
$mail .= '<div style="text-align:right; margin:15px 0;font-size: 20px;">Общая сумма заказа: <strong>' . $sum . ' руб. </strong></div>';
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

// $head = "<tr><th>Название</th><th>Цена</th><th>Кол-во</th></tr>";
// $template = str_replace ( "<tbody>" ,"<tbody>".$head, $template);

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