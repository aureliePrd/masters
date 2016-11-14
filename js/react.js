
/*var React = require('react');
var ReactDOM = require('react-dom');
*/

const size980 = 980;

let tab1 = ['un', 'deux', 'trois'];
let tab2 = ['avant', ...tab1];    
let tache_name = "The tâche";

console.log(tab2, size980);

var titre = (
  <div>
    <h1>Mon titre</h1>
    <h2>Mon sous titre</h2>
    <p>ils sont dans une variable</p>
  </div>
);



var fini = "";
var autreligne = false;

var topList = ['Tâche terminée', 'Nom de la tâche', 'Supprimer la tâche'];
var listLis = topList.map(function(person, keyy){
  // return statement goes here:
  return <li key={"liste_" + keyy}>{person}</li>;
});

function addNew (e) {
  e.preventDefault();
  alert('Ajouter nouveau projet');
}
function test (e) {
  e.preventDefault();
  alert('checked');
  var fini = "checked";
}


var ContentGeneral = React.createClass({
  render: function() {
    // commentaire
    return ( 
      <div>
        {titre}
        <form noValidate>
          <ul className="top">{listLis}</ul>   
          <ul className={fini}>
            {/*<li><input type="checkbox" id="checkbox" value="checkbox"/></li>*/}
            <li><button onClick={test}>Marquer la tâche comme terminée</button></li>
            <li className="tache">{tache_name}</li>
            <li><button>X</button></li>
            {!autreligne && <li>Autre ligne superflue</li>}
          </ul>
          {/* Commentaire */}
          <ul className="new">          
            <li className="tache"><input type="text"/></li>
            <li><input type="submit" onClick={addNew} value="OK"/></li>            
          </ul>
        </form>
      </div>      
    );
  }
});

ReactDOM.render(<ContentGeneral />, document.getElementById('main'));
