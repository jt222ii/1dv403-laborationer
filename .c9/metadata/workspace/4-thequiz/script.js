{"filter":false,"title":"script.js","tooltip":"/4-thequiz/script.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":43,"column":54},"end":{"row":43,"column":55},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":55},"end":{"row":43,"column":56},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":56},"end":{"row":43,"column":57},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":59},"end":{"row":43,"column":60},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":60},"end":{"row":44,"column":0},"action":"insert","lines":["",""]},{"start":{"row":44,"column":0},"end":{"row":44,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":8},"end":{"row":50,"column":10},"action":"insert","lines":["        entersend.onkeypress=function(e){if (e.keyCode == 13 && !e.shiftKey && document.getElementById(\"textarea\").value !== \"\"){","                e.preventDefault();","                MessageBoard.sendMessage();","                }","                if (e.keyCode == 13 && document.getElementById(\"textarea\").value === \"\")","                {e.preventDefault()}","        };"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":0},"end":{"row":44,"column":4},"action":"remove","lines":["    "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":4},"action":"remove","lines":["    "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":4},"action":"remove","lines":["    "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":4},"action":"remove","lines":["    "]},{"start":{"row":48,"column":0},"end":{"row":48,"column":4},"action":"remove","lines":["    "]},{"start":{"row":49,"column":0},"end":{"row":49,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":0},"end":{"row":44,"column":4},"action":"remove","lines":["    "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":4},"action":"remove","lines":["    "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":4},"action":"remove","lines":["    "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":4},"action":"remove","lines":["    "]},{"start":{"row":48,"column":0},"end":{"row":48,"column":4},"action":"remove","lines":["    "]},{"start":{"row":49,"column":0},"end":{"row":49,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":0},"end":{"row":45,"column":27},"action":"remove","lines":["        e.preventDefault();"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":129},"end":{"row":45,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":8},"end":{"row":45,"column":35},"action":"remove","lines":["MessageBoard.sendMessage();"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":0},"end":{"row":49,"column":10},"action":"remove","lines":["        if (e.keyCode == 13 && document.getElementById(\"textarea\").value === \"\")","        {e.preventDefault()}","        };"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":0},"end":{"row":47,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":4},"end":{"row":47,"column":8},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":8},"end":{"row":47,"column":9},"action":"insert","lines":["}"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":8},"end":{"row":46,"column":12},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":9},"end":{"row":47,"column":10},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":8},"end":{"row":45,"column":12},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":12},"end":{"row":52,"column":32},"action":"insert","lines":["            if (document.getElementById(\"textarea\").value !== \"\")","            {","                var answerValue = document.getElementById(\"textarea\").value;","                document.getElementById(\"textarea\").value = \"\";","                quiz.nextQ(answerValue, quiz.question.nextURL);","            }","            else","            {e.preventDefault()}"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":0},"end":{"row":45,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":0},"end":{"row":45,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":0},"end":{"row":45,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":32},"end":{"row":53,"column":0},"action":"insert","lines":["",""]},{"start":{"row":53,"column":0},"end":{"row":53,"column":12},"action":"insert","lines":["            "]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":32},"end":{"row":53,"column":12},"action":"remove","lines":["","            "]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":0},"end":{"row":45,"column":4},"action":"insert","lines":["    "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":4},"action":"insert","lines":["    "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":4},"action":"insert","lines":["    "]},{"start":{"row":48,"column":0},"end":{"row":48,"column":4},"action":"insert","lines":["    "]},{"start":{"row":49,"column":0},"end":{"row":49,"column":4},"action":"insert","lines":["    "]},{"start":{"row":50,"column":0},"end":{"row":50,"column":4},"action":"insert","lines":["    "]},{"start":{"row":51,"column":0},"end":{"row":51,"column":4},"action":"insert","lines":["    "]},{"start":{"row":52,"column":0},"end":{"row":52,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":75},"end":{"row":44,"column":127},"action":"remove","lines":[" && document.getElementById(\"textarea\").value !== \"\""]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":60},"end":{"row":44,"column":75},"action":"remove","lines":[" && !e.shiftKey"]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":17},"end":{"row":83,"column":0},"action":"insert","lines":["",""]},{"start":{"row":83,"column":0},"end":{"row":83,"column":20},"action":"insert","lines":["                    "]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":16},"end":{"row":83,"column":17},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":17},"end":{"row":83,"column":18},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":18},"end":{"row":83,"column":19},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":19},"end":{"row":83,"column":20},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":16},"end":{"row":83,"column":20},"action":"remove","lines":["docu"]},{"start":{"row":83,"column":16},"end":{"row":83,"column":24},"action":"insert","lines":["document"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":24},"end":{"row":83,"column":25},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":25},"end":{"row":83,"column":26},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":26},"end":{"row":83,"column":27},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":27},"end":{"row":83,"column":28},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":25},"end":{"row":83,"column":28},"action":"remove","lines":["get"]},{"start":{"row":83,"column":25},"end":{"row":83,"column":41},"action":"insert","lines":["getElementById()"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":40},"end":{"row":83,"column":42},"action":"insert","lines":["\"\""]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":41},"end":{"row":83,"column":42},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":42},"end":{"row":83,"column":43},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":43},"end":{"row":83,"column":44},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":44},"end":{"row":83,"column":45},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":45},"end":{"row":83,"column":46},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":46},"end":{"row":83,"column":47},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":49},"end":{"row":83,"column":50},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":50},"end":{"row":83,"column":51},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":51},"end":{"row":83,"column":52},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":52},"end":{"row":83,"column":53},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":53},"end":{"row":83,"column":54},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":54},"end":{"row":83,"column":55},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":55},"end":{"row":83,"column":56},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":55},"end":{"row":83,"column":56},"action":"remove","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":55},"end":{"row":83,"column":56},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":56},"end":{"row":83,"column":57},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":57},"end":{"row":83,"column":58},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":58},"end":{"row":83,"column":59},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":59},"end":{"row":83,"column":60},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":60},"end":{"row":83,"column":61},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":61},"end":{"row":83,"column":62},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":62},"end":{"row":83,"column":63},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":63},"end":{"row":83,"column":64},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":64},"end":{"row":83,"column":65},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":65},"end":{"row":83,"column":66},"action":"insert","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":65},"end":{"row":83,"column":66},"action":"remove","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":65},"end":{"row":83,"column":66},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":16},"end":{"row":83,"column":66},"action":"remove","lines":["document.getElementById(\"button\").disabled = true;"]}]}],[{"group":"doc","deltas":[{"start":{"row":101,"column":28},"end":{"row":102,"column":0},"action":"insert","lines":["",""]},{"start":{"row":102,"column":0},"end":{"row":102,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":8},"end":{"row":102,"column":58},"action":"insert","lines":["document.getElementById(\"button\").disabled = true;"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":33},"end":{"row":102,"column":39},"action":"remove","lines":["button"]},{"start":{"row":102,"column":33},"end":{"row":102,"column":34},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":34},"end":{"row":102,"column":35},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":35},"end":{"row":102,"column":36},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":36},"end":{"row":102,"column":37},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":37},"end":{"row":102,"column":38},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":57},"end":{"row":103,"column":0},"action":"insert","lines":["",""]},{"start":{"row":103,"column":0},"end":{"row":103,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":103,"column":8},"end":{"row":103,"column":57},"action":"insert","lines":["document.getElementById(\"knapp\").disabled = true;"]}]}],[{"group":"doc","deltas":[{"start":{"row":103,"column":33},"end":{"row":103,"column":38},"action":"remove","lines":["knapp"]},{"start":{"row":103,"column":33},"end":{"row":103,"column":34},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":103,"column":34},"end":{"row":103,"column":35},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":103,"column":35},"end":{"row":103,"column":36},"action":"insert","lines":["x"]}]}],[{"group":"doc","deltas":[{"start":{"row":103,"column":36},"end":{"row":103,"column":37},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":103,"column":37},"end":{"row":103,"column":38},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":103,"column":38},"end":{"row":103,"column":39},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":103,"column":39},"end":{"row":103,"column":40},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":103,"column":40},"end":{"row":103,"column":41},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":20},"end":{"row":8,"column":0},"action":"insert","lines":["",""]},{"start":{"row":8,"column":0},"end":{"row":8,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":8},"end":{"row":9,"column":60},"action":"insert","lines":["        document.getElementById(\"knapp\").disabled = true;","        document.getElementById(\"textarea\").disabled = true;"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":52},"end":{"row":8,"column":56},"action":"remove","lines":["true"]},{"start":{"row":8,"column":52},"end":{"row":8,"column":53},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":53},"end":{"row":8,"column":54},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":54},"end":{"row":8,"column":55},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":55},"end":{"row":8,"column":56},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":56},"end":{"row":8,"column":57},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":55},"end":{"row":9,"column":59},"action":"remove","lines":["true"]},{"start":{"row":9,"column":55},"end":{"row":9,"column":56},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":56},"end":{"row":9,"column":57},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":57},"end":{"row":9,"column":58},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":58},"end":{"row":9,"column":59},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":59},"end":{"row":9,"column":60},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":55},"end":{"row":10,"column":56},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":56},"end":{"row":10,"column":57},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":57},"end":{"row":10,"column":58},"action":"insert","lines":["."]}]}]]},"ace":{"folds":[],"scrolltop":177.5,"scrollleft":0,"selection":{"start":{"row":96,"column":6},"end":{"row":96,"column":6},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":11,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1418051402586,"hash":"df4e38c5d1a48d1c50a356bef3392f3e347aec53"}