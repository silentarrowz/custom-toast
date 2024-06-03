import { Button, Checkbox, DatePicker, Form, Input } from 'antd';
import { useToast } from './hooks/useToast';
import { useEffect } from 'react';

function Home(){
    const toast = useToast();
    console.log('toast home : ', toast);

    const changePosition = (position) => {
        toast.setPosition(position)
    }
    
    return (
        <div className='grid grid-rows-4 gap-1 mt-36  w-1/3 px-10 '>
            <Button type="primary" className='bg-[#70c040]' onClick={()=>{toast.success("Success toast notification")}}>success</Button>
            <Button type="primary" danger onClick={()=>{toast.error("Error toast notification")}}>error</Button>
            <Button type="primary" className='bg-[#ffa500]' onClick={()=>{toast.warning("Warning toast notification")}}>warning</Button>
            <Button className='bg-[#add8e6]' onClick={()=>{toast.info("Info toast notification")}}>info</Button>

            <div>
                <select className='w-1/2'
                 onChange={(e)=>changePosition(e.target.value)}
                 >
                    <option value="top-left">Top-Left</option>
                    <option value="top-right">Top-Right</option>
                    <option value="bottom-left">Bottom-Left</option>
                    <option value="bottom-right">Bottom-Right</option>
                 </select>
            </div>
        </div>
    )
}

export default Home;