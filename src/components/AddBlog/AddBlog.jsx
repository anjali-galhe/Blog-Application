import React from 'react'
import './AddBlog.css'

const AddBlog = () => {
  return (
    <div className='add-blog'>
        <label> Title:
        <input type="text" placeholder='Add Title..' />
        </label>
        <label>Category:<select name="fruits" id="fruits">
  <option value="Food">Food</option>
  <option value="Lifestyle">Lifestyle</option>
  <option value="Health">Health</option>
    <option value="Travel">Travel</option>
  <option value="Techonology">Techonology</option>
    <option value="Gaming">Gaming</option>
  <option value="Beauty">Beauty</option>
    <option value="Diy&Craft">Diy & Craft</option>
      <option value="Fasion">fasion</option>
  <option value="other" selected>Other</option>
</select></label>
<label>Date:<input type='date' /></label>
<label>Content:<input type='text' placeholder='The content here...'/></label>
<label>Add image:<input type="file"  accept="image/*"/></label>

<button>Add Blog</button>
      
    </div>
  )
}

export default AddBlog
