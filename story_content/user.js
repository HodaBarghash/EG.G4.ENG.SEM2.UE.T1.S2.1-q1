function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ZPFmPHqeyn":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzCocld-V28Jl7zGPdjIWy1bqSFHuNkBdtKhghzcf8hGyqaMeXauJSybHiQGOHGFYbqfg/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

