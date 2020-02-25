
import '../styles/style.scss' ;
import Person from './modules/Person' ; 
if (module.hot) {
    module.hot.accept()
}


 var john = new Person('Jone Doe', 'purple');
 john.greet();

 var jane = new Person('Jane Smith', 'green');
 jane.greet()