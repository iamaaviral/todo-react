import './App.css'

function EachListItem({item}) {
  return (
    <li className='list-group-itm'>
        <span>{item}</span>
        <span className='delete'>X</span>
    </li>
  )
}

export default EachListItem;
