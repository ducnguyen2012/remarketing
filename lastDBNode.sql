INSERT into information(
  created_at,remarketing_message,conversation_id,last_seen_user_message_created_at
) values (
  '{{ $json.created_at }}','{{ $json.rmktMessage}}','{{ $json.conversation_id }}', '{{ $json.created_at }}'
)
