"use strict"

const showJokes = () => {
  $('#showJokes').show()
  $('#showChatroom').hide()
  $('#showStreaming').hide()
}

const showChatroom = () => {
  $('#showJokes').hide()
  $('#showChatroom').show()
  $('#showStreaming').hide()
}

const showStreaming = () => {
  $('#showJokes').hide()
  $('#showChatroom').hide()
  $('#showStreaming').show()
}


$(() => {
  $('#showJokes').hide()
  $('#showChatroom').hide()
  $('#showStreaming').hide()
})