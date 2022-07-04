import { useState } from 'react'; 
import * as C from './App.styles';
import { Item } from './types/item'; 
import { ListItem } from './components/listItem/Index';
import { AddArea } from './components/addArea/Index';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'Comprar Pão',
      done: false,
    },
    {
      id: 2,
      name: 'Levar o largato para tomar sol',
      done: true,
    }
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  }

  return(
    <C.Cotainer>
      <C.Area>
        <C.Header>
          <h1>Lista de Tarefas</h1>
        </C.Header>

          <AddArea onEnter={handleAddTask}/>

          {list.map((item, index) => (
            <ListItem  key={index} item={item}/>
          ))}
        
      </C.Area>
    </C.Cotainer>
  );
}

export default App;