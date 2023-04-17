
        text1 = document.getElementById("text1");
        result = document.getElementById("result");
        function one(event) {
            var str1 = event.currentTarget.value;
            result.value+= str1;
        }
        function equal1() {
            str = result.value;
            if (str.includes("%")) {
                var num = str.split("%");
                var per = (num[0] / 100) * num[1]
                result.value= per;
            }
            else {
                var x=eval(str)
                result.value= x;
            }
            text1.value= str;
        }
        function clear1() {
            text1.value = " ";
            result.value = " ";
        }
        function backspace() {
            str = result.value;
            var back = str.slice(0, -1)
            result.value= back;
        }
    