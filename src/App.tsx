import { useState, useEffect } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurretMonth, filterListByMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";

const App = () => {
  const [list, setlist] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurretMonth());

  useEffect(()=>{
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Dragon Finance</C.HeaderText>
      </C.Header>
      <C.Body>
        
        {/* Área de informações */}
        <InfoArea
         currentMonth={currentMonth}
         onMonthChange={handleMonthChange}
         />
          
        {/* Área de inserção */}

        {/* Tabela de items */}
        <TableArea list={filteredList}/>

      </C.Body>
    </C.Container>
  );
}

export default App;