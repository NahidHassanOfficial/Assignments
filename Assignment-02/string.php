<?php

$strings = ["Hello", "World", "PHP", "Programming"];
$vowels = ['a', 'e', 'i', 'o', 'u'];

function printResult($originalString, $vowelsCount, $reversedString)
{
    echo "Original String: $originalString, Vowel Count: $vowelsCount, Reversed String: $reversedString\n";
}

foreach ($strings as $string) {
    $count = 0;
    $temp = strtolower($string);

    for ($i = 0; $i < strlen($string); $i++) {
        for ($j = 0; $j < count($vowels); $j++) {
            if ($temp[$i] == $vowels[$j]) {
                $count++;
                break;
            }
        }
    }
    $reversed = strrev($string);

    printResult($string, $count, $reversed);
}
