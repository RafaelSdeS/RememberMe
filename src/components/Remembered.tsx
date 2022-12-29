import React from 'react'

interface props {
   text: string;
   date: string;
   importance: string;
   index: number;

}

export const Remembered = (props: props) => {

   const bgColor = props.importance


   return (

    <div className='flex w-fit flex-row rounded bg-green-400 m-2 [&>*]:p-3 '>
      <h1>{props.text}</h1>
      <h1>{props.date}</h1>
      <h1 className={`bg-${bgColor}-600`}> {props.importance}</h1>
      <h1>{props.index}</h1>
    </div>
    /* 
    Things to be remembered 
    Text, created date, due date, importance (green, yellow, red), delete button
    */
   )
}
