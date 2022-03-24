import React, { useState } from 'react';
import Item from './Item/Index';
import style from './List.module.scss';


function List(){
	
	const [tasks, setTasks] = useState([
	{
		task: 'react',
		time: '02:00:00'
	},{
		task: 'JavaScript',
		time: '01:00:00'
	},{
		task: 'SpringBoot',
		time: '01:30:00'
	}]);

	return (
		<aside className={style.listaTarefas}>
			<h2 onClick={() => {
					setTasks([...tasks, { task: "TypeScript", time: "01:30:00" }]);
				}}>Studies to day</h2>
			<ul>
				{tasks.map((item, index) => (
					<Item
						key={index} 
						{...item}
					/>
				))}
			</ul>
		</aside>
	);
}

export default List;