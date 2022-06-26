import React from 'react'

const items = ['Medicine 1', 'Medicine 2', 'Medicine 3']
const styles = ['box_0', 'box_1', 'box_2']
function getStyle(number) {
    return styles[number % 3]
}

const listItems = items.map((item) =>
    <div>
        <form className = {getStyle(items.indexOf(item))}> {item} </form>
    </div> 
);

const PrescriptionTabs = () => {
    return (
        <div>
            {listItems}
        </div>
      )
}

export default PrescriptionTabs