import Image from 'next/image'

export default function Home() {
  return (
    <main className='main'>
      <div className="headline">
        <h1>Register Form</h1>
        <div className="box">
          &nbsp;&nbsp;
          <table className="">
            <tbody className='tabledata'>
              <tr>
                <td><label>Name : </label></td>
                <td></td>
                <td><input type="text" name="name"></input></td>
              </tr>
              <tr>
                <td><label>Email : </label></td>
                <td></td>
                <td><input type="email" name="email"></input></td>
              </tr>
              <tr>
                <td><label>Password : </label></td>
                <td></td>
                <td><input type="password" name="Password"></input></td>
              </tr>
              <tr>
                <td><label>Phone : </label></td>
                <td></td>
                <td><input type="number" name="number"></input></td>
              </tr>
              <tr>
                <td><label>Address : </label></td>
                <td></td>
                <td><textarea name='address' rows='5' cols="23"></textarea></td>
              </tr>
              
            </tbody>

          </table>
          <button type='submit' className='btn'>Submit</button>
        </div>
      </div>
    </main>
  )
}
