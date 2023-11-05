import './Home.css'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogContentText,
  Button,
} from '@material-ui/core'
import axios from 'axios'

function Home() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `eyJraWQiOiJPSGIwRk1GQnp4U21JWmZuNCt3VXZMRkQwOTF1SFN3YXJOZEpoVU1QSDJRPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiaUhJTExhVjIxa0c1WmhZaWxBYmNjdyIsInN1YiI6ImQ3ZTc3OTE0LTMwOTgtNDAwNS1iZTBhLTczYzI5Y2Y4MDcyYiIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTIuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0yXzY1QzZJVmNKViIsImNvZ25pdG86dXNlcm5hbWUiOiJkN2U3NzkxNC0zMDk4LTQwMDUtYmUwYS03M2MyOWNmODA3MmIiLCJvcmlnaW5fanRpIjoiNjVmNjZhNjgtMDdmNy00YzE2LWI2YzEtZDYyYzQ3NTRkZTM1IiwiYXVkIjoidmF1Y2ZwMGRidm1lbHZnZXZpc2cyNzExOSIsImV2ZW50X2lkIjoiZjI4ZWQ3MmMtYzkyZS00ZjQ5LThhNTgtNzM3MWZhZmMzYjgzIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2OTkxNzQ5MzksImV4cCI6MTY5OTE3ODUzOSwiaWF0IjoxNjk5MTc0OTM5LCJqdGkiOiJiNmZiYTU2Ni1mNTA3LTRjYzEtOWJmMS1iMTkwNjkyZmFlOTciLCJlbWFpbCI6ImRpdnlhQGFscGhhbm92ZS5jby51ayJ9.ZgHZJyOq1NuM3qxgBqcSnB6I3HCJVdP5LrUk5zweDBGc1oTp1J0C8SbgfAl3iVbB7A5ScpMNqvlkvIp6Ao-HEHkYNbClCuD_UXi6XQFrUCoy_r6CODhezxXr61hVVzBXYq5t8YXnEmFVogbpuoOGgQ4BxOWvL2cA1ZWjO8GmT_Q7dOehoDI9DtwvHdlN0kYajLH0SXfr5B_hRiumcFjNcbjpaM74KJrdKbUwxN4_Mnu1AA6PIaHQL5Ljze5kfCAcymsLAHvpBdRpjuzGwK9O1wD1bd93Y9OMjrEtFpAhdPdsuKJLBjLwcTcnBuAxr9jCjyKV3Yd10Z6LC_LjTkmjPA`, // Include the Authorization header with the token
    },
  }

  const fetchAPICall = () => {
    fetch(
      'https://cwqnm8i76k.execute-api.eu-west-2.amazonaws.com/v1/api/dashboard/userDetails?userName=12367899387d',
      requestOptions
    )
      .then((response) => response.text())
      .then((data) => {
        console.log('API called using Fetch API ' + data) // Log the API response data
        setOpen(true)
        setMessage(
          'API called using Fetch API and check console to see the data fetched from the API'
        )
      })
      .catch((error) => console.error(error))
  }

  const axiosCall = () => {
    axios
      .get(
        'https://cwqnm8i76k.execute-api.eu-west-2.amazonaws.com/v1/api/user/getAllUsers',
        requestOptions
      )
      .then(
        (response) => console.log('API called using Axios ' + response.data),
        setOpen(true),
        setMessage(
          'API called using Axios and check console to see the data fetched from the API'
        )
      )
      .catch((error) => console.error(error))
  }

  const XMLHttpRequestCall = () => {
    const xhr = new XMLHttpRequest()
    xhr.open(
      'GET',
      'https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat'
    )
    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log('API called using XMLHttpRequest ' + xhr.responseText) // Log the API response data
        setOpen(true)
        setMessage(
          'API called using XMLHttpRequest and check console to see the data fetched from the API'
        )
      } else {
        console.error(xhr.statusText)
      }
    }
    xhr.onerror = function () {
      console.error('Network Error')
    }
    xhr.send()
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <hi>Different ways of calling APIs in React</hi>
        <br />
        <button onClick={fetchAPICall}>Fetch API </button>
        <br />
        <button onClick={axiosCall}>Axios Library </button>
        <br />
        <button onClick={XMLHttpRequestCall}>XMLHttpRequest </button>
        <br />

        <Dialog
          open={open}
          onClose={() => this.setState({ open: false })}
          className="dialog"
          PaperProps={{
            style: {
              width: '300px',
              height: '200px',
              alignItems: 'center',
            },
          }}
        >
          <DialogContent>
            <DialogContentText>{message}</DialogContentText>
          </DialogContent>
          <div className="dialog-button-div">
            <Button
              className="dialog-button"
              onClick={handleClose}
              color="primary"
              autoFocus
            >
              Close
            </Button>
          </div>
        </Dialog>
      </header>
    </div>
  )
}

export default Home
