"use strict"

const showJokes = () => {
  $('#showJokes').show()
  $('#showChatroom').hide()
  $('#showCartoonStreaming').hide()
  $('#showAnimeStreaming').hide()
}

const showChatroom = () => {
  $('#showJokes').hide()
  $('#showChatroom').show()
  $('#showCartoonStreaming').hide()
  $('#showAnimeStreaming').hide()
}

const showCartoonStreaming = () => {
  $('#showJokes').hide()
  $('#showChatroom').hide()
  $('#showCartoonStreaming').show()
  $('#showAnimeStreaming').hide()
}

const showAnimeStreaming = () => {
  $('#showJokes').hide()
  $('#showChatroom').hide()
  $('#showCartoonStreaming').hide()
  $('#showAnimeStreaming').show()
}


$(() => {
  $('#showJokes').hide()
  $('#showChatroom').hide()
  $('#showCartoonStreaming').hide()
  $('#showAnimeStreaming').hide()
})