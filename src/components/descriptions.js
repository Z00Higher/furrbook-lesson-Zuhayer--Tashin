import React from 'react';
import './css/descriptions.css';

function Descriptions() {
  return(
    <div className = 'container-fluid Descriptions'>
      <div className = 'row'>
        <div className = 'col'>
          <h5 className = 'title-text'>Real Cats</h5>
          <p className = 'sub-text'>
          The cat is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.</p>
        </div>
        <div className = 'col'>
          <h5 className = 'title-text'>Real Dogs</h5>
          <p className = 'sub-text'>
          The dog or domestic dog is a domesticated descendant of the wolf, characterized by an upturning tail. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nearest living relative.</p>
        </div>
        <div className = 'col'>
          <h5 className = 'title-text'>Real Friends</h5>
          <p className = 'sub-text'>
             Here at Furbook, we believe all pets can be best friends. we believe it doesn't matter if you are a cat, dog, rabbit, or ferret; underneath that fur we are all cute, wonderful pets. Therefore, cats and dogs can get along with each other.					 </p>
         </div>
      </div>
    </div>
  );
}


export default Descriptions;