var fort = ['do not be afraid', 
'we are coming soon',
 'take it easy okay',
'we think love isnt blind',
'but this could be us'];



export default function getFortune() {
  var fortell = Math.floor(Math.random() * fort.length);

  return fort[fortell];
}