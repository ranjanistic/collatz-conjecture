
<!--
    Collatz conjecture

    @author Priyanshu Ranjan (ranjanistic)
-->
<?php
    function collatz($n) {
        $sequence = array();
        $sequence[] = $n;
        while ($n != 1) {
            if ($n % 2 == 0) {
                $n = $n / 2;
            } else {
                $n = $n * 3 + 1;
            }
            $sequence[] = $n;
        }
        return $sequence;
    }
    $sequence = collatz(13);
    echo '<pre>';
    print_r($sequence);
    echo '</pre>';
?>
