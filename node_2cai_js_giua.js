for (const item of $input.all()) {
  const currentTimeStr = new Date().toLocaleString('sv-SE', {
    timeZone: 'Asia/Ho_Chi_Minh'
  }); // e.g., "2025-06-30 16:42:01"

  item.json.currentTime = currentTimeStr.replace(' ', 'T'); // "2025-06-30T16:42:01"

  const curTime = new Date(item.json.currentTime);  // safe parse
  const created_at = new Date(item.json.created_at);  // assume ISO string

  const diffMs = curTime - created_at;
  const totalSec = Math.floor(diffMs / 1000);
  const hours = Math.floor(totalSec / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;

  const pad = n => n.toString().padStart(2, '0');
  item.json.diffTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  item.json.diffHours = hours;
}

return $input.all();

// ==========================================================================================================================================================================
// Loop over input items and add a new field called 'myNewField' to the JSON of each one
for (const item of $input.all()) {
  if (item.json.diffHours >= 6 && item.json.diffhours <= 7){
    item.json.rmktMessage = `🔥 DUY NHẤT TRONG HÔM NAY & NGÀY MAI! SAPO TẶNG NGAY MÁY IN HOÁ ĐƠN CHUYÊN NGHIỆP (trị giá 1.190.000đ) 
    
Ưu đãi có hạn anh/chị ơi, nhanh tay chốt ngay để không bỏ lỡ!

anh/chị cho em xin số điện thoại để em giữ khuyến mại cho anh/chị nhé ạ`
  }
  else if (item.json.diffHours >= 3 && item.json.diffHours <=4){
    item.json.rmktMessage = "Dạ anh/chị ơi, phần mềm bên em có  07 ngày trải nghiệm dùng thử phần mềm miễn phí đó ạ. Mình cho em xin số zalo em tạo tài khoản cho mình dùng thử nha ạ"
  }
  else if (item.json.diffHours >= 1 && item.json.diffHours <= 2) {
    item.json.rmktMessage = "Anh/chị ơi, e đợi mãi không thấy mình phản hồi để tư vấn tiếp, không biết mình còn thắc mắc gì không để bên em có thể tư vấn thêm ạ?"
  } 
  
}

return $input.all();
