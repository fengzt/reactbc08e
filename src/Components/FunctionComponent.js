import React from 'react'

// gõ rfc: tạo function component
// Tạo ra 1 thẻ <FunctionComponent/>

export default function FunctionComponent() {
    
    
    
    // Lệnh return chứa giao diện của thẻ.
    // Lưu ý: giao diện của thẻ CHỈ ĐƯỢC bao bọc bởi 1 thẻ duy nhất
    return (
        <section className="p-2 bg-dark m-2 text-white">
            <div className="text-white-display-4">Title</div>
            <div>
                Content Content Content Content Content
            </div>

        </section>
    )
}
