# Link video thuyết trình: https://youtu.be/gwvFhrjUSx0

# Mernstack bookstore

Project bao gồm 3 services là frontend (ReactJS + TailwindCSS), backend (NodeJS + ExpressJS) và database (MongoDB), dùng để thực hiện các thao tác CRUD trên Book Model (title, author, publishYear).

Trong thư mục backend và frontend sẽ có mã nguồn và Dockerfile cho dịch vụ tương ứng.

Ngoài ra khi làm Level 2, nhóm chúng em có khai báo thêm 2 services là Nginx dùng để làm reverse proxy và load balancing, cũng như Redis để cache thông tin sách thì người dùng gửi request lấy thông tin.

Trong thư mục reverse-proxy sẽ có file config của Nginx.

Như vậy trong tệp tin docker-compose.yml sẽ gồm 5 services: Backend, Frontend, Mongo, Nginx và Redis.

Ở Level 3, nhóm chúng em có tạo thư mục docker-swarm và có file docker-compose.yml bên trong. File này dành riêng cho việc deploy stack lên Docker Swarm.

# Hướng dẫn chạy

- Tải Docker Desktop về máy tính cá nhân và khởi động chương trình.
- Vào thư mục "mern" chứa mã nguồn của project.
- Bật PowerShell - hiện đang trỏ đến thư mục mern.

Level 1:

- Chạy lệnh "docker-compose up" và đợi docker tiến hành build.
- Khi build xong, truy cập đến http://localhost:5173.
- Người dùng có thể thực hiện thao tác CRUD để kiểm tra.

Level 2:

- Để kiểm tra tính Load Balancing, bật Command Line và chạy lệnh "curl http://localhost:8092" nhiều lần.
- Tại đây sẽ console log ra message có id của host nơi backend đang chạy.
- Và các id này đều khác nhau.
- Bật thêm Tab Command Line và chạy lệnh "docker ps" sẽ liệt kê các container đang chạy và id của chúng.
- Các id được console log ra chính là các id của container nơi backend đang chạy.
- Từ đó ta có thể thấy được rằng, Nginx đã thực hiện phân phối request đến nhiều backend container khác nhau.
- Để kiếm tra Redis cache thông tin, hãy thực hiện thêm 1 sách tại http://localhost:5173.
- Chọn display là Card trên giao diện để lấy id của sách vừa thêm.
- Vào Postman, thực hiện gửi GET request đến http://localhost:5173/books/id với id là id của sách ở bước trên.
- Ta sẽ thấy dữ liệu trả về là thông tin sách.
- Vì đây là dữ liệu mới và lần đầu được request để lấy thông tin nên Redis chỉ mới lưu lại thông tin này.
- Thực hiện gửi GET request giống bước trên lần nữa, ta sẽ thấy dữ liệu trả về đã có thêm dòng "isCached: true" tức đó là dữ liệu cache từ Redis.

Level 3:

- Trỏ PowerShell đến thư mục docker-swarm.
- Chạy lệnh "docker swarm init".
- Chạy tiếp lệnh "docker service create --name registry --publish published=5000,target=5000 registry:2".
- Chạy lệnh "docker service ls" để kiểm tra service có được tạo thành công.
- Chạy tiếp lệnh "docker compose up -d".
- Có thể dùng lệnh "docker compose ps" để kiểm tra build có thành công.
- Chạy lệnh "docker compose down --volumes" để dừng các container.
- Thực hiện Push image lên Registry bằng lệnh "docker compose push".
- Tiến hành deploy bằng lệnh "docker stack deploy --compose-file docker-compose.yml mernstack".
- Quá trình deploy hoàn tất.
