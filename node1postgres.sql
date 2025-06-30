with flagged as (
	select conversation_id from messages
	where query ~ '\m(0\d{9}|\+84\d{9})\M'
    and app_id='d4473402-d298-4526-bd9f-124202d240e2'
    and query is not null
    and query <> ''
), lastRow as (
	select *, row_number() over (
		partition by conversation_id
		order by created_at desc 
		
	) as rowNumber
	from messages
    where query is not NULL
    and app_id='d4473402-d298-4526-bd9f-124202d240e2'
    and query <> ''
)
select 
	created_at,
	conversation_id,
	query,
	answer
 from lastRow
where rowNumber = 1 
and app_id='d4473402-d298-4526-bd9f-124202d240e2'
and (conversation_id) not in (
	select conversation_id from flagged
)
