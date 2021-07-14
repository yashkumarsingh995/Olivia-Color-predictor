let sn=new Synaptic_Networks(3,4,3);
 

let points=[[[255,4,2],[1,0,0]],[[0,0,255],[0,1,0]],[[0,255,0],[0,0,1]],[[255,10,5],[1,0,0]],[[210,10,70],[1,0,0]],[[50,217,90],[0,0,1]],[[40,40,230],[0,1,0]],[[0,60,245],[0,1,0]],[[90,80,215],[0,1,0]],[[40,233,99],[0,0,1]],[[211,5,19],[1,0,0]],[[20,30,230],[0,1,0]],[[0,10,207],[0,1,0]]];




for(let i=0;i<1;i++)
{ 
  let point=Math.floor((Math.random(0,points.length)*10) % points.length)
  
  sn.train(points[point][0],points[point][1])
}






function execute(a,b, c)
{
  var arr=[];
  arr.push(a,b,c);
  console.log(a+b+c);
  let d=sn.feedforward(arr);
  decide(d.weighted_sum_hidden_outputs);

 
}

function decide(value)
{
  let maximum=0;
  let index=-1;
  for(let i=0;i<value.length;i++)
  {
    if(value[i]>maximum)
    {
      maximum=value[i];
      index=i;
    }
  }
  
  let box=document.getElementById('canvas');
  
  if(index===0)
  { 
    box.style.backgroundColor="red";
    box.innerText="Its red with a accuracy of "+ value[index]*100 + "%";
  }
  else if(index===1)
  {
    box.style.backgroundColor="blue";
    box.innerText="Its blue with a accuracy of "+ value[index]*100 + "%";
  }
  else
  {
    box.style.backgroundColor="green";
    box.innerText="Its Green with a accuracy of "+ value[index]*100 + "%";
  }
}