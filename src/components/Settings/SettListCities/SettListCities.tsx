import React, { useContext } from 'react'
import { CitiesContext, ICitiesContext } from '../../../context/citiesContext'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { SettCard } from './SettCard/SettCard'
import './SettListCities.scss'

export const SettListCities = () => {
    const { cities, setCities } = useContext<ICitiesContext>(CitiesContext)

    const removeCity = (id: string) => {
        setCities(cities.filter(city => city.id !== id))
        localStorage.setItem('cities', JSON.stringify(cities))
    }

    const handleOnDragEnd = (result: any) => {
        if (!result.destination) return;

        const items = Array.from(cities);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setCities(items);
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
                {(provided: any) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                        {cities?.map((el, index) => {
                            return (
                                <Draggable key={el.id} draggableId={el.id} index={index}>
                                    {(provided: any) => (
                                        <li className='set__list-item' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <SettCard
                                                city={el.city}
                                                id={el.id}
                                                removeCity={removeCity}
                                            />
                                        </li>
                                    )}
                                </Draggable>
                            )
                        })}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    )
}