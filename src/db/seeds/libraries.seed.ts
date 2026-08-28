export const defaultLibraries = [
    // FRONTEND (1-15)
    {
        name: "React.js Core",
        filename: "main.tsx — React",
        language: "TypeScript",
        category: "frontend",
        desc: "## 🌟 Khái niệm\nReact là thư viện JavaScript hàng đầu để xây dựng SPA dựa trên các Component tái sử dụng độc lập và cơ chế Virtual DOM tối ưu.\n## 🛠️ Cách hoạt động\n- Khởi tạo cổng kết nối giữa React và DOM thật thông qua `createRoot`.\n- Render Component gốc vào trong phần tử HTML đích.\n- Tự động lắng nghe thay đổi State để cập nhật phần DOM tương ứng.\n## 📝 Giải thích Code mẫu\n- `createRoot`: Điểm neo gắn kết ứng dụng React với thẻ `#root`.\n- `StrictMode`: Công cụ gỡ lỗi giúp phát hiện lỗi cảnh báo trong giai đoạn phát triển.",
        install: "npm install react react-dom",
        codeTs: "import React from 'react';\nimport ReactDOM from 'react-dom/client';\n\nconst App: React.FC = () => <h1>Hello World</h1>;\n\nReactDOM.createRoot(document.getElementById('root')!).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);",
        codeJs: "import React from 'react';\nimport ReactDOM from 'react-dom/client';\n\nconst App = () => <h1>Hello World</h1>;\n\nReactDOM.createRoot(document.getElementById('root')).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);"
    },
    {
        name: "Axios client",
        filename: "api.ts — HTTP Client",
        language: "TypeScript",
        category: "frontend",
        desc: "## 🌟 Khái niệm\nAxios là thư viện gửi yêu cầu HTTP (HTTP Client) bất đồng bộ dựa trên cơ chế Promise, hoạt động tốt trên cả Trình duyệt và Node.js.\n## 🛠️ Cách hoạt động\n- Khởi tạo instance với cấu hình mặc định (baseURL, timeout).\n- Gửi các truy vấn GET, POST bất đồng bộ.\n- Tự động chuyển đổi kết quả trả về thành đối tượng JSON.\n## 📝 Giải thích Code mẫu\n- `axios.create`: Định nghĩa cấu hình chung cho mọi request.\n- `AxiosInstance`: Khai báo kiểu dữ liệu cho phiên kết nối trong TS.",
        install: "npm install axios",
        codeTs: "import axios, { AxiosInstance, AxiosResponse } from 'axios';\n\nconst api: AxiosInstance = axios.create({\n  baseURL: 'https://api.example.com',\n  timeout: 5000\n});\n\nexport const getData = async <T>(url: string): Promise<T> => {\n  const response: AxiosResponse<T> = await api.get(url);\n  return response.data;\n};",
        codeJs: "import axios from 'axios';\n\nconst api = axios.create({\n  baseURL: 'https://api.example.com',\n  timeout: 5000\n});\n\nexport const getData = async (url) => {\n  const response = await api.get(url);\n  return response.data;\n};"
    },
    {
        name: "Redux Toolkit",
        filename: "store.ts — State Management",
        language: "TypeScript",
        category: "frontend",
        desc: "## 🌟 Khái niệm\nRedux Toolkit là bộ thư viện quản lý trạng thái (State) toàn cục tối ưu cho React, giải quyết vấn đề truyền props quá sâu (Prop Drilling).\n## 🛠️ Cách hoạt động\n- Tạo Slice định nghĩa trạng thái ban đầu và các hàm biến đổi (reducers).\n- Khởi tạo Store để gom toàn bộ các slice quản lý tập trung.\n- Component Dispatch các action để làm thay đổi dữ liệu trong Store.\n## 📝 Giải thích Code mẫu\n- `createSlice`: Kết hợp định nghĩa action và reducer tại một nơi.\n- `configureStore`: Tạo store trung tâm tự động cài đặt middleware.",
        install: "npm install @reduxjs/toolkit react-redux",
        codeTs: "import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';\n\ninterface CounterState { value: number; }\nconst initialState: CounterState = { value: 0 };\n\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState,\n  reducers: {\n    increment: (state) => { state.value += 1; },\n    addByAmount: (state, action: PayloadAction<number>) => {\n      state.value += action.payload;\n    }\n  }\n});\n\nexport const store = configureStore({\n  reducer: { counter: counterSlice.reducer }\n});",
        codeJs: "import { configureStore, createSlice } from '@reduxjs/toolkit';\n\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState: { value: 0 },\n  reducers: {\n    increment: (state) => { state.value += 1; },\n    addByAmount: (state, action) => {\n      state.value += action.payload;\n    }\n  }\n});\n\nexport const store = configureStore({\n  reducer: { counter: counterSlice.reducer }\n});"
    },
    {
        name: "React Router Dom",
        filename: "App.tsx — Navigation",
        language: "TypeScript",
        category: "frontend",
        desc: "## 🌟 Khái niệm\nThư viện tiêu chuẩn điều phối URL định tuyến trong React, giúp chuyển trang nhanh chóng mà không cần tải lại file HTML.\n## 🛠️ Cách hoạt động\n- Lắng nghe URL thay đổi trên thanh địa chỉ của trình duyệt.\n- So khớp đường dẫn trong thẻ Route để hiển thị component tương ứng.\n- Cập nhật lịch sử duyệt trang (Browser History).\n## 📝 Giải thích Code mẫu\n- `BrowserRouter`: Cung cấp ngữ cảnh định tuyến dựa trên lịch sử web.\n- `Routes`: Nhóm các Route con lại để kiểm tra đối sánh.",
        install: "npm install react-router-dom",
        codeTs: "import React from 'react';\nimport { BrowserRouter, Routes, Route, Link } from 'react-router-dom';\n\nconst App: React.FC = () => (\n  <BrowserRouter>\n    <nav><Link to='/'>Home</Link></nav>\n    <Routes>\n      <Route path='/' element={<h1>Trang Chủ</h1>} />\n    </Routes>\n  </BrowserRouter>\n);\nexport default App;",
        codeJs: "import React from 'react';\nimport { BrowserRouter, Routes, Route, Link } from 'react-router-dom';\n\nconst App = () => (\n  <BrowserRouter>\n    <nav><Link to='/'>Home</Link></nav>\n    <Routes>\n      <Route path='/' element={<h1>Trang Chủ</h1>} />\n    </Routes>\n  </BrowserRouter>\n);\nexport default App;"
    },
    {
        name: "Tailwind CSS",
        filename: "tailwind.config.ts — Styling",
        language: "JavaScript",
        category: "frontend",
        desc: "## 🌟 Khái niệm\nTailwind CSS là framework CSS dạng Utility-First giúp thiết kế giao diện cực nhanh bằng cách viết trực tiếp các class CSS vào file HTML.\n## 🛠️ Cách hoạt động\n- Quét các tệp mã nguồn để phát hiện lớp CSS nào được sử dụng.\n- Biên dịch và gom các class đó vào một file CSS duy nhất khi build.\n- Loại bỏ CSS thừa thãi giúp dung lượng file tải trang cực nhẹ.\n## 📝 Giải thích Code mẫu\n- `content`: Đường dẫn các file chứa mã nguồn cần quét class CSS.\n- `theme.extend`: Tùy biến mở rộng màu sắc hoặc kích cỡ font tùy ý.",
        install: "npm install -D tailwindcss postcss autoprefixer",
        codeTs: "import type { Config } from 'tailwindcss';\n\nexport default {\n  content: ['./src/**/*.{js,jsx,ts,tsx}'],\n  theme: {\n    extend: {\n      colors: {\n        primary: '#14b8a6'\n      }\n    }\n  },\n  plugins: []\n} satisfies Config;",
        codeJs: "module.exports = {\n  content: ['./src/**/*.{js,jsx,ts,tsx}'],\n  theme: {\n    extend: {\n      colors: {\n        primary: '#14b8a6'\n      }\n    }\n  },\n  plugins: []\n};"
    },
    {
        name: "Lucide React",
        filename: "Icons.tsx — SVGs",
        language: "JavaScript",
        category: "frontend",
        desc: "## 🌟 Khái niệm\nBộ icon SVG thiết kế đồng bộ, sắc nét, dung lượng nhẹ và được đóng gói thành các Component React độc lập dễ quản lý.\n## 🛠️ Cách hoạt động\n- Nhập icon mong muốn dưới dạng thẻ JSX thông thường.\n- Truyền trực tiếp props để điều khiển màu sắc, độ đậm nhạt và kích thước.\n## 📝 Giải thích Code mẫu\n- `Home`: Component hiển thị biểu tượng ngôi nhà.\n- `className`: Dùng class CSS (như Tailwind) để tinh chỉnh kích thước icon.",
        install: "npm install lucide-react",
        codeTs: "import React from 'react';\nimport { Home, Trash2, Settings } from 'lucide-react';\n\nconst Toolbar: React.FC = () => (\n  <div className='flex gap-4'>\n    <Home className='w-5 h-5 text-teal-500' />\n    <Trash2 className='w-5 h-5 text-rose-500' />\n  </div>\n);\nexport default Toolbar;",
        codeJs: "import React from 'react';\nimport { Home, Trash2, Settings } from 'lucide-react';\n\nconst Toolbar = () => (\n  <div className='flex gap-4'>\n    <Home className='w-5 h-5 text-teal-500' />\n    <Trash2 className='w-5 h-5 text-rose-500' />\n  </div>\n);\nexport default Toolbar;"
    },
    {
        name: "Framer Motion",
        filename: "AnimatedCard.tsx — Animations",
        language: "TypeScript",
        category: "frontend",
        desc: "## 🌟 Khái niệm\nThư viện tạo hiệu ứng chuyển động (Animation) cao cấp cho React, hỗ trợ mượt mà các thao tác cử chỉ kéo thả, hover và transition.\n## 🛠️ Cách hoạt động\n- Bọc phần tử HTML bằng thẻ `motion.div`.\n- Định nghĩa trạng thái ban đầu (`initial`) và trạng thái đích (`animate`).\n- Thiết lập thời gian chạy thông qua thuộc tính `transition`.\n## 📝 Giải thích Code mẫu\n- `motion.div`: Thẻ mở rộng của Framer Motion thay thế cho thẻ div mặc định.\n- `y`: Điều hướng chuyển động dọc theo trục đứng của màn hình.",
        install: "npm install framer-motion",
        codeTs: "import React from 'react';\nimport { motion } from 'framer-motion';\n\nconst Card: React.FC = () => (\n  <motion.div\n    initial={{ opacity: 0, y: 10 }}\n    animate={{ opacity: 1, y: 0 }}\n    transition={{ duration: 0.5 }}\n    className='p-4 bg-slate-900'\n  >\n    Nội dung hoạt ảnh\n  </motion.div>\n);\nexport default Card;",
        codeJs: "import React from 'react';\nimport { motion } from 'framer-motion';\n\nconst Card = () => (\n  <motion.div\n    initial={{ opacity: 0, y: 10 }}\n    animate={{ opacity: 1, y: 0 }}\n    transition={{ duration: 0.5 }}\n    className='p-4 bg-slate-900'\n  >\n    Nội dung hoạt ảnh\n  </motion.div>\n);\nexport default Card;"
    },
    {
        name: "TanStack React Query",
        filename: "queries.ts — Fetching & Cache",
        language: "TypeScript",
        category: "frontend",
        desc: "## 🌟 Khái niệm\nTrình quản lý State bất đồng bộ mạnh mẽ giúp tự động lưu trữ bộ đệm (cache), đồng bộ, cập nhật dữ liệu từ Server về Client.\n## 🛠️ Cách hoạt động\n- Tạo truy vấn bằng hook `useQuery` và gắn cho nó một khóa định danh `queryKey`.\n- Nếu khoá trùng lặp, trả về dữ liệu cache lập tức để tăng tốc độ.\n- Tự động gọi ngầm API để làm tươi dữ liệu nếu phát hiện dữ liệu cũ.\n## 📝 Giải thích Code mẫu\n- `queryKey`: Nhãn để React Query phân biệt và lưu trữ cache dữ liệu.\n- `queryFn`: Hàm thực thi gọi API thực tế trả về Promise dữ liệu.",
        install: "npm install @tanstack/react-query",
        codeTs: "import { useQuery, UseQueryResult } from '@tanstack/react-query';\nimport axios from 'axios';\n\ninterface User { id: number; name: string; }\nconst fetchUsers = async (): Promise<User[]> => {\n  const res = await axios.get('/api/users');\n  return res.data;\n};\n\nexport const useUsers = (): UseQueryResult<User[], Error> => {\n  return useQuery({ queryKey: ['users'], queryFn: fetchUsers });\n};",
        codeJs: "import { useQuery } from '@tanstack/react-query';\nimport axios from 'axios';\n\nconst fetchUsers = async () => {\n  const res = await axios.get('/api/users');\n  return res.data;\n};\n\nexport const useUsers = () => {\n  return useQuery({ queryKey: ['users'], queryFn: fetchUsers });\n};"
    },
    {
        name: "Zod validation",
        filename: "schema.ts — Schema Validator",
        language: "TypeScript",
        category: "frontend",
        desc: "## 🌟 Khái niệm\nZod là thư viện định nghĩa cấu trúc dữ liệu (Schema) và kiểm định kiểu cực kỳ tối ưu, giúp bảo vệ ứng dụng khỏi dữ liệu rác.\n## 🛠️ Cách hoạt động\n- Xây dựng sơ đồ Schema quy định rõ kiểu dữ liệu mong muốn.\n- Thực hiện kiểm định (`safeParse`) dữ liệu gửi lên.\n- Tự động trích xuất TypeScript Types từ schema vừa dựng.\n## 📝 Giải thích Code mẫu\n- `z.object`: Định nghĩa đối tượng chứa các trường dữ liệu.\n- `z.infer`: Trích xuất kiểu dữ liệu TS tự động mà không cần gõ lại.",
        install: "npm install zod",
        codeTs: "import { z } from 'zod';\n\nexport const userSchema = z.object({\n  username: z.string().min(3),\n  email: z.string().email(),\n  age: z.number().min(18)\n});\n\nexport type User = z.infer<typeof userSchema>;\n",
        codeJs: "import { z } from 'zod';\n\nexport const userSchema = z.object({\n  username: z.string().min(3),\n  email: z.string().email(),\n  age: z.number().min(18)\n});"
    },
    {
        name: "React Hook Form",
        filename: "Form.tsx — Forms Control",
        language: "TypeScript",
        category: "frontend",
        desc: "## 🌟 Khái niệm\nThư viện quản lý Biểu mẫu (Form) hiệu năng cực cao cho React, giảm số lần re-render không cần thiết và tối ưu hóa tốc độ nhập liệu.\n## 🛠️ Cách hoạt động\n- Quản lý trạng thái các trường input dưới dạng Uncontrolled Components.\n- Chỉ re-render ô nhập liệu khi có thay đổi thực tế.\n- Tích hợp kiểm định lỗi trực tiếp thông qua ref.\n## 📝 Giải thích Code mẫu\n- `register`: Đăng ký input vào hệ thống kiểm soát của Hook Form.\n- `handleSubmit`: Hàm bọc ngăn hành vi submit mặc định của trình duyệt.",
        install: "npm install react-hook-form",
        codeTs: "import React from 'react';\nimport { useForm, SubmitHandler } from 'react-hook-form';\n\ninterface Inputs { username: string; }\n\nconst Form: React.FC = () => {\n  const { register, handleSubmit } = useForm<Inputs>();\n  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);\n  return (\n    <form onSubmit={handleSubmit(onSubmit)}>\n      <input {...register('username', { required: true })} />\n      <button type='submit'>Gửi</button>\n    </form>\n  );\n};",
        codeJs: "import React from 'react';\nimport { useForm } from 'react-hook-form';\n\nconst Form = () => {\n  const { register, handleSubmit } = useForm();\n  const onSubmit = (data) => console.log(data);\n  return (\n    <form onSubmit={handleSubmit(onSubmit)}>\n      <input {...register('username', { required: true })} />\n      <button type='submit'>Gửi</button>\n    </form>\n  );\n};"
    },
    {
        name: "Sass preprocessor",
        filename: "styles.scss — Styling",
        language: "CSS",
        category: "frontend",
        desc: "## 🌟 Khái niệm\nSass là ngôn ngữ mở rộng CSS (CSS Preprocessor) bổ sung các tính năng lập trình như biến, lồng selector và kế thừa mã CSS.\n## 🛠️ Cách hoạt động\n- Viết mã CSS lồng nhau có cấu trúc phân cấp trực quan.\n- Trình biên dịch Sass chuyển đổi mã `.scss` thành mã `.css` thông thường.\n## 📝 Giải thích Code mẫu\n- `$primary-color`: Khai báo biến lưu trữ giá trị màu sắc tái sử dụng.\n- `.card .title`: Quy tắc lồng nhau giúp cấu trúc gọn gàng hơn.",
        install: "npm install -D sass",
        codeTs: "$primary-color: #14b8a6;\n\n.card {\n  background: #0f172a;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  \n  .title {\n    color: $primary-color;\n    font-size: 1.25rem;\n  }\n}",
        codeJs: "$primary-color: #14b8a6;\n\n.card {\n  background: #0f172a;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  \n  .title {\n    color: $primary-color;\n    font-size: 1.25rem;\n  }\n}"
    },
    {
        name: "SweetAlert2",
        filename: "alerts.ts — Popups",
        language: "TypeScript",
        category: "frontend",
        desc: "## 🌟 Khái niệm\nThư viện tạo hộp thoại popup thông báo (modal alert) thay thế hoàn hảo cho hộp thoại alert mặc định thô sơ của trình duyệt.\n## 🛠️ Cách hoạt động\n- Gọi hàm thông báo của SweetAlert bất kỳ lúc nào.\n- Tùy biến tiêu đề, icon trạng thái (success, error) và màu sắc nút nhấn.\n- Hộp thoại hiển thị dưới dạng modal mượt mà trên nền tối.\n## 📝 Giải thích Code mẫu\n- `Swal.fire`: Hàm cốt lõi kích hoạt hiển thị hộp thoại popup.",
        install: "npm install sweetalert2",
        codeTs: "import Swal from 'sweetalert2';\n\nexport const showAlert = (): void => {\n  Swal.fire({\n    title: 'Thành Công!',\n    text: 'Dữ liệu đã được lưu vào hệ thống.',\n    icon: 'success',\n    confirmButtonColor: '#14b8a6'\n  });\n};",
        codeJs: "import Swal from 'sweetalert2';\n\nexport const showAlert = () => {\n  Swal.fire({\n    title: 'Thành Công!',\n    text: 'Dữ liệu đã được lưu vào hệ thống.',\n    icon: 'success',\n    confirmButtonColor: '#14b8a6'\n  });\n};"
    },
    {
        name: "Chart.js (React Chart)",
        filename: "Chart.tsx — Charts Visualization",
        language: "TypeScript",
        category: "frontend",
        desc: "## 🌟 Khái niệm\nThư viện vẽ biểu đồ cực kỳ linh hoạt, hỗ trợ trực quan hóa dữ liệu thống kê qua các dạng biểu đồ Canvas sinh động.\n## 🛠️ Cách hoạt động\n- Đăng ký các mô-đun vẽ biểu đồ của Chart.js.\n- Nhập dữ liệu phân lớp (`labels` và `datasets`).\n- Kết xuất ra thẻ Canvas tối ưu hóa tốc độ tải đồ họa phần cứng.\n## 📝 Giải thích Code mẫu\n- `ChartJS.register`: Đăng ký các thành phần biểu đồ cần dùng.\n- `Line`: Component React kết xuất biểu đồ đường thẳng.",
        install: "npm install chart.js react-chartjs-2",
        codeTs: "import React from 'react';\nimport { Line } from 'react-chartjs-2';\nimport { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';\n\nChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);\n\nconst data = { labels: ['T1', 'T2'], datasets: [{ data: [12, 19] }] };\nconst Analytics: React.FC = () => <Line data={data} />;\nexport default Analytics;",
        codeJs: "import React from 'react';\nimport { Line } from 'react-chartjs-2';\nimport { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';\n\nChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);\n\nconst data = { labels: ['T1', 'T2'], datasets: [{ data: [12, 19] }] };\nconst Analytics = () => <Line data={data} />;\nexport default Analytics;"
    },
    {
        name: "Lodash utilities",
        filename: "utils.ts — Data Helpers",
        language: "TypeScript",
        category: "frontend",
        desc: "## 🌟 Khái niệm\nBộ công cụ hỗ trợ xử lý dữ liệu (mảng, đối tượng, chuỗi) cực nhanh, tối ưu hóa các hàm thuật toán phức tạp.\n## 🛠️ Cách hoạt động\n- Nhập hàm cần sử dụng từ thư viện Lodash.\n- Xử lý các phép toán lọc, gom nhóm, hoặc sao chép sâu (deep clone).\n## 📝 Giải thích Code mẫu\n- `_.filter`: Tìm kiếm các phần tử khớp điều kiện trong mảng.\n- `_.cloneDeep`: Sao chép sâu đối tượng phức tạp, tránh ghi đè bộ nhớ.",
        install: "npm install lodash",
        codeTs: "import _ from 'lodash';\n\ninterface User { id: number; active: boolean; }\nconst users: User[] = [{ id: 1, active: true }, { id: 2, active: false }];\nconst activeUsers = _.filter(users, { active: true });\nconst clone = _.cloneDeep(users);",
        codeJs: "import _ from 'lodash';\n\nconst users = [{ id: 1, active: true }, { id: 2, active: false }];\nconst activeUsers = _.filter(users, { active: true });\nconst clone = _.cloneDeep(users);"
    },
    {
        name: "Formik form library",
        filename: "FormikForm.tsx — Forms",
        language: "TypeScript",
        category: "frontend",
        desc: "## 🌟 Khái niệm\nFormik giúp việc quản lý state form, kiểm định dữ liệu đầu vào và thông báo lỗi trở nên đơn giản, nhất quán.\n## 🛠️ Cách hoạt động\n- Quản lý state của toàn bộ các trường nhập liệu tập trung.\n- Báo lỗi tức thời thông qua schema validator tích hợp.\n## 📝 Giải thích Code mẫu\n- `Formik`: Component bọc cung cấp ngữ cảnh lưu trữ form state.\n- `Field`: Hộp nhập liệu liên kết tự động với Formik.",
        install: "npm install formik",
        codeTs: "import React from 'react';\nimport { Formik, Form, Field } from 'formik';\n\ninterface Values { email: string; }\nconst MyForm: React.FC = () => (\n  <Formik<Values> initialValues={{ email: '' }} onSubmit={values => console.log(values)}>\n    <Form>\n      <Field name='email' type='email' />\n      <button type='submit'>Gửi</button>\n    </Form>\n  </Formik>\n);",
        codeJs: "import React from 'react';\nimport { Formik, Form, Field } from 'formik';\n\nconst MyForm = () => (\n  <Formik initialValues={{ email: '' }} onSubmit={values => console.log(values)}>\n    <Form>\n      <Field name='email' type='email' />\n      <button type='submit'>Gửi</button>\n    </Form>\n  </Formik>\n);"
    },

    // BACKEND (16-30)
    {
        name: "NestJS Core",
        filename: "main.ts — Server Entry",
        language: "TypeScript",
        category: "backend",
        desc: "## 🌟 Khái niệm\nNestJS là framework Node.js có kiến trúc chặt chẽ kế thừa từ Angular, hỗ trợ lập trình hướng đối tượng OOP và thiết lập API quy chuẩn doanh nghiệp.\n## 🛠️ Cách hoạt động\n- Khởi tạo instance ứng dụng từ Module gốc (`AppModule`).\n- Thiết lập tiền tố URL toàn cục (Global Prefix).\n- Khởi chạy máy chủ HTTP lắng nghe cổng kết nối.\n## 📝 Giải thích Code mẫu\n- `NestFactory.create`: Phương thức tạo phiên bản server ứng dụng.\n- `app.listen`: Lắng nghe các truy cập gửi đến máy chủ.",
        install: "npm install @nestjs/core @nestjs/common",
        codeTs: "import { NestFactory } from '@nestjs/core';\nimport { AppModule } from './app.module';\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  app.setGlobalPrefix('api');\n  await app.listen(3000);\n}\nbootstrap();",
        codeJs: "const { NestFactory } = require('@nestjs/core');\nconst { AppModule } = require('./app.module');\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  app.setGlobalPrefix('api');\n  await app.listen(3000);\n}\nbootstrap();"
    },
    {
        name: "Express.js",
        filename: "server.ts — Routing API",
        language: "TypeScript",
        category: "backend",
        desc: "## 🌟 Khái niệm\nExpress là framework web tối giản và linh hoạt nhất của Node.js, đóng vai trò nền tảng cho việc tạo API HTTP.\n## 🛠️ Cách hoạt động\n- Khởi tạo ứng dụng express.\n- Đăng ký các Middleware trung gian (ví dụ: parse JSON body).\n- Định nghĩa các Route handler bất đồng bộ lắng nghe truy cập.\n## 📝 Giải thích Code mẫu\n- `app.use(express.json())`: Hỗ trợ server đọc dữ liệu JSON gửi lên.\n- `app.get`: Đăng ký phương thức GET tại URL chỉ định.",
        install: "npm install express",
        codeTs: "import express, { Request, Response } from 'express';\nconst app = express();\n\napp.use(express.json());\napp.get('/api/health', (req: Request, res: Response) => {\n  res.json({ status: 'OK' });\n});\napp.listen(3000);",
        codeJs: "const express = require('express');\nconst app = express();\n\napp.use(express.json());\napp.get('/api/health', (req, res) => {\n  res.json({ status: 'OK' });\n});\napp.listen(3000);"
    },
    {
        name: "Fastify Web Core",
        filename: "server.ts — Performance API",
        language: "TypeScript",
        category: "backend",
        desc: "## 🌟 Khái niệm\nFastify là framework Node.js thế hệ mới ưu tiên hiệu năng tối đa, có tốc độ xử lý nhanh gấp 2 lần so với Express truyền thống.\n## 🛠️ Cách hoạt động\n- Khởi tạo máy chủ tích hợp sẵn công cụ ghi nhật ký (logger).\n- Định nghĩa schema kiểm tra dữ liệu để tăng tốc độ parse JSON.\n- Lắng nghe cổng kết nối bất đồng bộ.\n## 📝 Giải thích Code mẫu\n- `fastify({ logger: true })`: Tự động bật ghi log API.\n- `server.listen`: Kích hoạt lắng nghe cổng kết nối máy chủ.",
        install: "npm install fastify",
        codeTs: "import fastify, { FastifyInstance } from 'fastify';\nconst server: FastifyInstance = fastify({ logger: true });\n\nserver.get('/ping', async () => {\n  return { pong: 'it works' };\n});\nserver.listen({ port: 3000 });",
        codeJs: "const fastify = require('fastify');\nconst server = fastify({ logger: true });\n\nserver.get('/ping', async () => {\n  return { pong: 'it works' };\n});\nserver.listen({ port: 3000 });"
    },
    {
        name: "TypeORM schema",
        filename: "database.ts — Database Setup",
        language: "TypeScript",
        category: "backend",
        desc: "## 🌟 Khái niệm\nTypeORM là thư viện ánh xạ đối tượng quan hệ (ORM) mạnh mẽ chạy trên Node.js, viết bằng TypeScript giúp kết nối CSDL SQL dễ dàng.\n## 🛠️ Cách hoạt động\n- Khởi tạo DataSource cấu hình thông tin kết nối CSDL.\n- Tự động quét các thực thể (entities) để tạo bảng CSDL tương ứng.\n- Thực hiện các kết nối truy vấn bất đồng bộ.\n## 📝 Giải thích Code mẫu\n- `DataSource`: Đối tượng cấu hình kết nối trung tâm của TypeORM.\n- `synchronize`: Tự động tạo bảng dựa trên class entity trong TS.",
        install: "npm install typeorm pg",
        codeTs: "import { DataSource } from 'typeorm';\n\nexport const AppDataSource = new DataSource({\n  type: 'postgres',\n  url: process.env.DATABASE_URL,\n  synchronize: true,\n  entities: []\n});",
        codeJs: "const { DataSource } = require('typeorm');\n\nconst AppDataSource = new DataSource({\n  type: 'postgres',\n  url: process.env.DATABASE_URL,\n  synchronize: true,\n  entities: []\n});\nmodule.exports = { AppDataSource };"
    },
    {
        name: "Prisma ORM engine",
        filename: "schema.prisma — Database Model",
        language: "TypeScript",
        category: "backend",
        desc: "## 🌟 Khái niệm\nPrisma là bộ ORM thế hệ mới cực đỉnh, cung cấp trình tạo Schema trực quan và tự động sinh mã định kiểu (TypeScript Types) an toàn.\n## 🛠️ Cách hoạt động\n- Định nghĩa các Model bảng dữ liệu trong file `schema.prisma`.\n- Chạy lệnh sinh code client (`prisma generate`).\n- Gọi truy vấn CSDL qua đối tượng client an toàn kiểu dữ liệu.\n## 📝 Giải thích Code mẫu\n- `datasource db`: Khai báo loại CSDL kết nối (PostgreSQL).\n- `model`: Định nghĩa cấu trúc bảng dữ liệu trong Prisma.",
        install: "npm install @prisma/client\nnpx prisma init",
        codeTs: "datasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel Project {\n  id    Int    @id @default(autoincrement())\n  title String\n}",
        codeJs: "datasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel Project {\n  id    Int    @id @default(autoincrement())\n  title String\n}"
    },
    {
        name: "Mongoose ODM",
        filename: "mongo.ts — MongoDB ODM",
        language: "TypeScript",
        category: "backend",
        desc: "## 🌟 Khái niệm\nThư viện mô hình hóa dữ liệu (ODM) chuyên dụng để tương tác với cơ sở dữ liệu phi quan hệ MongoDB trên môi trường Node.js.\n## 🛠️ Cách hoạt động\n- Định nghĩa lược đồ Schema quy định rõ ràng kiểu dữ liệu cấu trúc.\n- Trích xuất Model biên dịch từ Schema đó.\n- Thực hiện các câu lệnh tìm kiếm, cập nhật tài liệu JSON bất đồng bộ.\n## 📝 Giải thích Code mẫu\n- `new Schema`: Khai báo lược đồ quy định cấu trúc bản ghi MongoDB.\n- `mongoose.model`: Đóng gói Schema thành Model thực thi dữ liệu.",
        install: "npm install mongoose",
        codeTs: "import mongoose, { Schema, Document } from 'mongoose';\n\ninterface IUser extends Document { name: string; email: string; }\nconst userSchema = new Schema<IUser>({\n  name: { type: String, required: true },\n  email: { type: String, unique: true }\n});\nexport const UserModel = mongoose.model<IUser>('User', userSchema);",
        codeJs: "const mongoose = require('mongoose');\nconst { Schema } = mongoose;\n\nconst userSchema = new Schema({\n  name: { type: String, required: true },\n  email: { type: String, unique: true }\n});\nconst UserModel = mongoose.model('User', userSchema);\nmodule.exports = { UserModel };"
    },
    {
        name: "Socket.io Core",
        filename: "chat.gateway.ts — WebSockets",
        language: "TypeScript",
        category: "backend",
        desc: "## 🌟 Khái niệm\nThư viện giao tiếp song công thời gian thực (Real-time) hai chiều dựa trên sự kiện, cực kỳ hữu dụng cho Chat hoặc Notification.\n## 🛠️ Cách hoạt động\n- Khởi chạy máy chủ Server Socket.io lắng nghe cổng giao tiếp riêng.\n- Bắt sự kiện kết nối của Client.\n- Phát tán (emit) hoặc lắng nghe (on) các gói tin truyền tải.\n## 📝 Giải thích Code mẫu\n- `new Server`: Khởi tạo socket server trung tâm.\n- `io.emit`: Phát tín hiệu gửi tin nhắn đến toàn bộ client đang trực tuyến.",
        install: "npm install socket.io",
        codeTs: "import { Server, Socket } from 'socket.io';\n\nconst io = new Server(3001);\nio.on('connection', (socket: Socket) => {\n  console.log('Client connected:', socket.id);\n  socket.on('message', (data: string) => {\n    io.emit('broadcast', data);\n  });\n});",
        codeJs: "const { Server } = require('socket.io');\n\nconst io = new Server(3001);\nio.on('connection', (socket) => {\n  console.log('Client connected:', socket.id);\n  socket.on('message', (data) => {\n    io.emit('broadcast', data);\n  });\n});"
    },
    {
        name: "JsonWebToken Auth",
        filename: "jwt.ts — Authentication",
        language: "TypeScript",
        category: "backend",
        desc: "## 🌟 Khái niệm\nJsonWebToken (JWT) giúp bảo mật và xác thực phiên đăng nhập của người dùng dưới dạng một mã hóa token stateless an toàn.\n## 🛠️ Cách hoạt động\n- Ký tên mã hóa thông tin Payload thành chuỗi token bảo mật.\n- Gửi token về cho client lưu trữ.\n- Client gửi kèm token lên Header khi gọi API; server giải mã token để xác thực.\n## 📝 Giải thích Code mẫu\n- `jwt.sign`: Tạo chuỗi token mã hóa kèm thời gian hết hạn.\n- `jwt.verify`: Giải mã và xác thực tính hợp lệ của token.",
        install: "npm install jsonwebtoken",
        codeTs: "import jwt from 'jsonwebtoken';\n\nconst SECRET = 'my-secret-key';\nexport const generateToken = (payload: object): string => {\n  return jwt.sign(payload, SECRET, { expiresIn: '1d' });\n};\nexport const verifyToken = (token: string): any => {\n  return jwt.verify(token, SECRET);\n};",
        codeJs: "const jwt = require('jsonwebtoken');\n\nconst SECRET = 'my-secret-key';\nconst generateToken = (payload) => {\n  return jwt.sign(payload, SECRET, { expiresIn: '1d' });\n};\nconst verifyToken = (token) => {\n  return jwt.verify(token, SECRET);\n};\nmodule.exports = { generateToken, verifyToken };"
    },
    {
        name: "Multer Uploads",
        filename: "upload.ts — Multi-parts Files",
        language: "TypeScript",
        category: "backend",
        desc: "## 🌟 Khái niệm\nMulter là middleware xử lý tải lên các tệp tin (upload files) định dạng multipart/form-data trong môi trường Node.js.\n## 🛠️ Cách hoạt động\n- Định nghĩa nơi lưu trữ (destination) và đặt lại tên file an toàn.\n- Khởi tạo middleware multer cấu hình theo dung lượng và định dạng.\n- Tích hợp vào API để lưu tệp tin xuống thư mục server.\n## 📝 Giải thích Code mẫu\n- `diskStorage`: Cấu hình lưu trữ trực tiếp file lên ổ cứng của máy chủ.\n- `multer({ storage })`: Khởi tạo công cụ middleware xử lý file.",
        install: "npm install multer",
        codeTs: "import multer, { StorageEngine } from 'multer';\n\nconst storage: StorageEngine = multer.diskStorage({\n  destination: './uploads',\n  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)\n});\nexport const upload = multer({ storage });",
        codeJs: "const multer = require('multer');\n\nconst storage = multer.diskStorage({\n  destination: './uploads',\n  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)\n});\nconst upload = multer({ storage });\nmodule.exports = { upload };"
    },
    {
        name: "Bcrypt security",
        filename: "hash.ts — Password Hasher",
        language: "TypeScript",
        category: "backend",
        desc: "## 🌟 Khái niệm\nThuật toán băm một chiều chuyên dụng dùng để mã hóa mật khẩu người dùng trước khi lưu trữ vào cơ sở dữ liệu để bảo mật tuyệt đối.\n## 🛠️ Cách hoạt động\n- Tạo một mã muối ngẫu nhiên (salt).\n- Thực hiện băm mật khẩu thô kết hợp mã muối nhiều vòng.\n- Kiểm tra đối sánh mật khẩu thô và chuỗi đã băm khi đăng nhập.\n## 📝 Giải thích Code mẫu\n- `bcrypt.hash`: Băm mật khẩu thô bất đồng bộ.\n- `bcrypt.compare`: So sánh mật khẩu khớp với mã băm an toàn.",
        install: "npm install bcrypt",
        codeTs: "import bcrypt from 'bcrypt';\n\nexport const hashPassword = async (pass: string): Promise<string> => {\n  return await bcrypt.hash(pass, 10);\n};\nexport const checkPassword = async (pass: string, hash: string): Promise<boolean> => {\n  return await bcrypt.compare(pass, hash);\n};",
        codeJs: "const bcrypt = require('bcrypt');\n\nconst hashPassword = async (pass) => {\n  return await bcrypt.hash(pass, 10);\n};\nconst checkPassword = async (pass, hash) => {\n  return await bcrypt.compare(pass, hash);\n};\nmodule.exports = { hashPassword, checkPassword };"
    },
    {
        name: "Nodemailer mailer",
        filename: "mail.ts — Email Service",
        language: "TypeScript",
        category: "backend",
        desc: "## 🌟 Khái niệm\nThư viện Node.js chuyên dụng gửi thư điện tử (email), hỗ trợ đầy đủ các giao thức bảo mật SMTP hoặc OAuth2.\n## 🛠️ Cách hoạt động\n- Khởi tạo cổng vận chuyển (transporter) cấu hình máy chủ SMTP.\n- Soạn thảo cấu trúc thư (người gửi, người nhận, tiêu đề, HTML).\n- Gửi thư bất đồng bộ.\n## 📝 Giải thích Code mẫu\n- `createTransport`: Khởi tạo thông số máy chủ gửi mail.\n- `sendMail`: Gửi bức thư đi kèm nội dung văn bản hoặc file đính kèm.",
        install: "npm install nodemailer",
        codeTs: "import nodemailer from 'nodemailer';\n\nconst transporter = nodemailer.createTransport({\n  service: 'gmail',\n  auth: { user: 'me@gmail.com', pass: 'mypass' }\n});\nexport const sendEmail = (to: string, subject: string, body: string): Promise<any> => {\n  return transporter.sendMail({ from: 'me@gmail.com', to, subject, text: body });\n};",
        codeJs: "const nodemailer = require('nodemailer');\n\nconst transporter = nodemailer.createTransport({\n  service: 'gmail',\n  auth: { user: 'me@gmail.com', pass: 'mypass' }\n});\nconst sendEmail = (to, subject, body) => {\n  return transporter.sendMail({ from: 'me@gmail.com', to, subject, text: body });\n};\nmodule.exports = { sendEmail };"
    },
    {
        name: "Passport.js",
        filename: "passport.ts — Auth Strategies",
        language: "TypeScript",
        category: "backend",
        desc: "## 🌟 Khái niệm\nMiddleware xác thực đăng nhập linh hoạt tích hợp hàng trăm chiến lược xác thực (Local, OAuth, JWT, Google, Facebook).\n## 🛠️ Cách hoạt động\n- Đăng ký chiến lược xác thực mong muốn (ví dụ: LocalStrategy).\n- Kiểm tra thông tin người dùng gửi lên.\n- Trả về đối tượng User hợp lệ vào ngữ cảnh Request.\n## 📝 Giải thích Code mẫu\n- `passport.use`: Đăng ký phương thức xác thực cụ thể vào hệ thống.",
        install: "npm install passport passport-local",
        codeTs: "import passport from 'passport';\nimport { Strategy as LocalStrategy } from 'passport-local';\n\npassport.use(new LocalStrategy((user, pass, done) => {\n  if (user === 'admin' && pass === '123') return done(null, { name: 'admin' });\n  return done(null, false);\n}));",
        codeJs: "const passport = require('passport');\nconst LocalStrategy = require('passport-local').Strategy;\n\npassport.use(new LocalStrategy((user, pass, done) => {\n  if (user === 'admin' && pass === '123') return done(null, { name: 'admin' });\n  return done(null, false);\n}));"
    },
    {
        name: "Morgan logger",
        filename: "logger.ts — HTTP Logs",
        language: "TypeScript",
        category: "backend",
        desc: "## 🌟 Khái niệm\nMiddleware ghi nhật ký (HTTP request logger) tự động ghi lại lịch sử gọi API gửi lên server để dễ phân tích và sửa lỗi.\n## 🛠️ Cách hoạt động\n- Tích hợp Morgan vào ứng dụng express/nest.\n- Morgan sẽ lắng nghe mọi request, ghi nhận thời gian phản hồi, trạng thái HTTP, đường dẫn và in trực tiếp ra Terminal.\n## 📝 Giải thích Code mẫu\n- `morgan('dev')`: Kích hoạt định dạng in log ngắn gọn, tô màu trực quan.",
        install: "npm install morgan",
        codeTs: "import express from 'express';\nimport morgan from 'morgan';\nconst app = express();\n\napp.use(morgan('dev'));",
        codeJs: "const express = require('express');\nconst morgan = require('morgan');\nconst app = express();\n\napp.use(morgan('dev'));"
    },
    {
        name: "Helmet headers",
        filename: "security.ts — Headers Shield",
        language: "TypeScript",
        category: "backend",
        desc: "## 🌟 Khái niệm\nHelmet giúp bảo vệ ứng dụng Node.js khỏi các lỗ hổng bảo mật web phổ biến bằng cách tự động cấu hình các HTTP Header an toàn.\n## 🛠️ Cách hoạt động\n- Helmet hoạt động như một middleware trung gian.\n- Tự động thêm các header bảo vệ như X-Frame-Options, X-Content-Type-Options để hạn chế bị clickjacking, chèn mã độc.\n## 📝 Giải thích Code mẫu\n- `app.use(helmet())`: Bật chế độ phòng thủ tiêu chuẩn cho ứng dụng.",
        install: "npm install helmet",
        codeTs: "import express from 'express';\nimport helmet from 'helmet';\nconst app = express();\n\napp.use(helmet());",
        codeJs: "const express = require('express');\nconst helmet = require('helmet');\nconst app = express();\n\napp.use(helmet());"
    },
    {
        name: "Sequelize ORM",
        filename: "database.ts — Sequelize Models",
        language: "TypeScript",
        category: "backend",
        desc: "## 🌟 Khái niệm\nSequelize là bộ ORM dựa trên Promise phổ biến bậc nhất cho các cơ sở dữ liệu SQL như PostgreSQL, MySQL, SQLite.\n## 🛠️ Cách hoạt động\n- Khởi tạo instance kết nối CSDL.\n- Định nghĩa cấu trúc Model tương ứng bảng dữ liệu.\n- Chạy các câu lệnh đồng bộ và truy vấn dữ liệu dạng đối tượng.\n## 📝 Giải thích Code mẫu\n- `new Sequelize`: Khởi chạy kết nối CSDL.\n- `sequelize.define`: Định nghĩa cấu trúc trường dữ liệu của Model.",
        install: "npm install sequelize pg",
        codeTs: "import { Sequelize, DataTypes } from 'sequelize';\nconst sequelize = new Sequelize(process.env.DATABASE_URL || '');\n\nexport const User = sequelize.define('User', {\n  name: DataTypes.STRING\n});",
        codeJs: "const { Sequelize, DataTypes } = require('sequelize');\nconst sequelize = new Sequelize(process.env.DATABASE_URL);\n\nconst User = sequelize.define('User', {\n  name: DataTypes.STRING\n});\nmodule.exports = { User };"
    },

    // DATABASE & DEVOPS (31-40)
    {
        name: "Neon PostgreSQL Cloud",
        filename: "neon.sql — Connection Config",
        language: "SQL",
        category: "database",
        desc: "## 🌟 Khái niệm\nNeon là nền tảng PostgreSQL đám mây (Serverless Postgres) hỗ trợ tự động mở rộng tài nguyên và nhân bản database tức thời.\n## 🛠️ Cách hoạt động\n- Khởi tạo Database Cluster trên Cloud Neon.\n- Nhận chuỗi kết nối an toàn bảo mật SSL.\n- Viết các câu lệnh khởi tạo bảng và truy vấn SQL.\n## 📝 Giải thích Code mẫu\n- `SELECT NOW()`: Câu lệnh kiểm tra thời gian kết nối phản hồi từ database.\n- `CREATE TABLE`: Câu lệnh tạo bảng cài đặt nếu chưa tồn tại.",
        install: "DATABASE_URL=postgresql://user:pass@host/dbname?sslmode=require",
        codeTs: "-- TypeScript Config context\nSELECT NOW();\n\nCREATE TABLE IF NOT EXISTS portfolio_settings (\n  id SERIAL PRIMARY KEY,\n  logo_text VARCHAR(100) NOT NULL\n);",
        codeJs: "-- JavaScript Config context\nSELECT NOW();\n\nCREATE TABLE IF NOT EXISTS portfolio_settings (\n  id SERIAL PRIMARY KEY,\n  logo_text VARCHAR(100) NOT NULL\n);"
    },
    {
        name: "NocoDB API Meta Sync",
        filename: "NocoDB_Sync.txt — Steps Guide",
        language: "YAML",
        category: "database",
        desc: "## 🌟 Khái niệm\nNocoDB biến bất kỳ CSDL quan hệ nào thành một bảng Smart Spreadsheet thông minh (giống Airtable), cung cấp giao diện quản trị đồ họa trực quan.\n## 🛠️ Cách hoạt động\n- Khi cấu trúc bảng thay đổi trong code (ví dụ thêm cột mới),\n- Cần chạy đồng bộ hóa Metadata (Meta Sync) trên Dashboard NocoDB.\n- NocoDB sẽ cập nhật lại các bảng dữ liệu khớp với cấu trúc mới.\n## 📝 Giải thích Code mẫu\n- Hướng dẫn các bước bấm tay đồng bộ dữ liệu nhanh trên GUI dashboard.",
        install: "Cài đặt: Chạy trực tiếp qua Docker hoặc GUI NocoDB Dashboard",
        codeTs: "# TS Mode Sync steps\n1. Mở trang quản trị NocoDB Dashboard.\n2. Chọn Data Sources.\n3. Click 'Meta Sync' -> 'Sync Now'.",
        codeJs: "# JS Mode Sync steps\n1. Mở trang quản trị NocoDB Dashboard.\n2. Chọn Data Sources.\n3. Click 'Meta Sync' -> 'Sync Now'."
    },
    {
        name: "Redis Caching ioredis",
        filename: "redis.ts — Redis Cache",
        language: "TypeScript",
        category: "database",
        desc: "## 🌟 Khái niệm\nRedis là cơ sở dữ liệu lưu trữ cấu trúc dữ liệu dạng Key-Value trong bộ nhớ RAM, giúp làm bộ đệm (Caching) tốc độ siêu tốc.\n## 🛠️ Cách hoạt động\n- Kết nối đến máy chủ Redis qua cổng 6379.\n- Đặt giá trị Caching (`SET`) đi kèm thời gian hết hạn (Time To Live - TTL).\n- Đọc dữ liệu nhanh từ RAM thay vì truy vấn nặng vào CSDL chính.\n## 📝 Giải thích Code mẫu\n- `redis.set`: Ghi dữ liệu vào RAM kèm tham số 'EX' quy định giây hết hạn.\n- `redis.get`: Lấy dữ liệu tức thì từ bộ đệm RAM.",
        install: "npm install ioredis",
        codeTs: "import Redis from 'ioredis';\nconst redis = new Redis('redis://127.0.0.1:6379');\n\nexport const cacheData = async (key: string, value: string): Promise<void> => {\n  await redis.set(key, value, 'EX', 3600);\n};",
        codeJs: "const Redis = require('ioredis');\nconst redis = new Redis('redis://127.0.0.1:6379');\n\nconst cacheData = async (key, value) => {\n  await redis.set(key, value, 'EX', 3600);\n};\nmodule.exports = { cacheData };"
    },
    {
        name: "Dockerfile Config",
        filename: "Dockerfile — Containerization",
        language: "YAML",
        category: "database",
        desc: "## 🌟 Khái niệm\nDockerfile chứa tập hợp các câu lệnh tuần tự để đóng gói toàn bộ mã nguồn và môi trường chạy ứng dụng thành một Container Docker độc lập.\n## 🛠️ Cách hoạt động\n- Chọn Image nền hệ điều hành thu nhỏ (ví dụ: alpine).\n- Sao chép mã nguồn và tải các thư viện phụ thuộc.\n- Biên dịch ứng dụng và khai báo lệnh chạy mặc định khi khởi động.\n## 📝 Giải thích Code mẫu\n- `FROM`: Định nghĩa image môi trường nền ban đầu.\n- `WORKDIR`: Tạo thư mục làm việc bên trong container.",
        install: "# Yêu cầu máy chủ đã cài đặt Docker Daemon",
        codeTs: "# Build production image\nFROM node:20-alpine\nWORKDIR /usr/src/app\nCOPY package*.json ./\nRUN npm install --omit=dev\nCOPY . .\nRUN npm run build\nEXPOSE 3000\nCMD [\"node\", \"dist/main.js\"]",
        codeJs: "# Build development image\nFROM node:20-alpine\nWORKDIR /usr/src/app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD [\"node\", \"server.js\"]"
    },
    {
        name: "Docker Compose",
        filename: "docker-compose.yml — Orchestration",
        language: "YAML",
        category: "database",
        desc: "## 🌟 Khái niệm\nDocker Compose là công cụ cấu hình chạy nhiều Service Container đồng thời (App, Database, Redis) thông qua cấu hình file YAML duy nhất.\n## 🛠️ Cách hoạt động\n- Khai báo các service container cần khởi động.\n- Thiết lập mạng nội bộ kết nối giữa các container.\n- Chạy lệnh khởi động đồng loạt chỉ bằng 1 dòng lệnh `docker compose up`.\n## 📝 Giải thích Code mẫu\n- `services`: Khai báo danh sách các container chạy độc lập.\n- `ports`: Ánh xạ cổng truy cập của container ra ngoài máy vật lý.",
        install: "# Sử dụng: docker compose up -d",
        codeTs: "version: '3.8'\nservices:\n  web:\n    build: .\n    ports:\n      - \"3000:3000\"\n    environment:\n      - DATABASE_URL=postgres://db:5432/portfolio",
        codeJs: "version: '3.8'\nservices:\n  web:\n    build: .\n    ports:\n      - \"3000:3000\"\n    environment:\n      - DATABASE_URL=postgres://db:5432/portfolio"
    },
    {
        name: "PM2 process control",
        filename: "ecosystem.config.js — PM2",
        language: "JavaScript",
        category: "database",
        desc: "## 🌟 Khái niệm\nPM2 là trình quản lý tiến trình (Process Manager) chuyên nghiệp cho các ứng dụng Node.js trong môi trường Production thực tế.\n## 🛠️ Cách hoạt động\n- Giữ cho tiến trình Node.js chạy ngầm liên tục.\n- Tự động khởi động lại ứng dụng nếu xảy ra lỗi Crash đột ngột.\n- Hỗ trợ chế độ Cluster để chia đều tải truy cập ra nhiều nhân CPU.\n## 📝 Giải thích Code mẫu\n- `exec_mode: 'cluster'`: Kích hoạt chạy đa luồng tối đa hóa phần cứng.\n- `instances`: Số lượng bản sao tiến trình chạy song song.",
        install: "npm install -g pm2",
        codeTs: "module.exports = {\n  apps: [{\n    name: 'portfolio-backend-ts',\n    script: 'dist/main.js',\n    instances: 'max',\n    exec_mode: 'cluster'\n  }]\n};",
        codeJs: "module.exports = {\n  apps: [{\n    name: 'portfolio-backend-js',\n    script: 'server.js',\n    instances: 2,\n    exec_mode: 'cluster'\n  }]\n};"
    },
    {
        name: "Nginx reverse proxy",
        filename: "nginx.conf — Web Server",
        language: "JavaScript",
        category: "database",
        desc: "## 🌟 Khái niệm\nNginx là máy chủ proxy ngược (Reverse Proxy) và máy chủ web hiệu năng cao, chuyên dùng phân phối tải và mã hóa chứng chỉ bảo mật SSL.\n## 🛠️ Cách hoạt động\n- Lắng nghe các truy cập từ tên miền bên ngoài gửi vào cổng 80/443.\n- Chuyển tiếp các yêu cầu đó vào cổng ứng dụng Node.js chạy ngầm (ví dụ: cổng 3000).\n- Tối ưu hóa phân phối file tĩnh (HTML, ảnh).\n## 📝 Giải thích Code mẫu\n- `proxy_pass`: Khai báo cổng chuyển tiếp yêu cầu API HTTP nội bộ.",
        install: "sudo apt install nginx",
        codeTs: "server {\n    listen 80;\n    server_name example.com;\n    location / {\n        proxy_pass http://localhost:3000;\n    }\n}",
        codeJs: "server {\n    listen 80;\n    server_name example.com;\n    location / {\n        proxy_pass http://localhost:3000;\n    }\n}"
    },
    {
        name: "GitHub Actions CI",
        filename: "ci.yml — CI/CD Pipeline",
        language: "YAML",
        category: "database",
        desc: "## 🌟 Khái niệm\nDịch vụ tự động hóa quy trình CI/CD tích hợp trực tiếp trên kho lưu trữ GitHub, giúp tự động test, build và deploy code mỗi khi push.\n## 🛠️ Cách hoạt động\n- Kích hoạt quy trình khi phát hiện sự kiện push hoặc pull request.\n- Khởi chạy một máy ảo Ubuntu chạy các câu lệnh test và build.\n- Tự động gửi kết quả báo lỗi về cho lập trình viên nếu build thất bại.\n## 📝 Giải thích Code mẫu\n- `on`: Điều kiện kích hoạt tự động chạy pipeline.\n- `steps`: Các bước tuần tự chạy lệnh cài đặt và build.",
        install: "# Thiết lập trong thư mục .github/workflows/",
        codeTs: "name: TS Build CI\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v3\n    - run: npm ci\n    - run: npm run build",
        codeJs: "name: JS Test CI\non: [push]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v3\n    - run: npm ci\n    - run: npm test"
    },
    {
        name: "Knex.js builder",
        filename: "knexfile.js — Query Builder",
        language: "JavaScript",
        category: "database",
        desc: "## 🌟 Khái niệm\nKnex.js là bộ xây dựng câu lệnh SQL (Query Builder) linh hoạt, an toàn, hỗ trợ quản lý di trú CSDL (migrations) chuyên nghiệp.\n## 🛠️ Cách hoạt động\n- Viết các câu lệnh truy vấn CSDL dưới dạng chuỗi hàm JS/TS dễ hiểu.\n- Tự động phòng chống tấn công SQL Injection.\n- Quản lý phiên bản di trú CSDL qua file cấu hình.\n## 📝 Giải thích Code mẫu\n- `client`: Khai báo loại CSDL SQL đích cần giao tiếp.\n- `connection`: Địa chỉ chuỗi kết nối an toàn CSDL.",
        install: "npm install knex pg",
        codeTs: "import type { Knex } from 'knex';\nexport default {\n  client: 'pg',\n  connection: process.env.DATABASE_URL\n} as Knex.Config;",
        codeJs: "module.exports = {\n  client: 'pg',\n  connection: process.env.DATABASE_URL\n};"
    },
    {
        name: "YAML configuration",
        filename: "config.yaml — DevOps",
        language: "YAML",
        category: "database",
        desc: "## 🌟 Khái niệm\nYAML là định dạng tuần tự hóa dữ liệu trực quan bằng mắt thường, được dùng phổ biến để viết cấu hình Docker, Kubernetes.\n## 🛠️ Cách hoạt động\n- Định nghĩa dữ liệu theo cấu trúc thụt lề thụt dòng phân cấp.\n- Trình đọc YAML biên dịch cấu trúc này thành các biến môi trường cấu hình chạy ứng dụng.\n## 📝 Giải thích Code mẫu\n- Cấu trúc khai báo thông số cổng kết nối và máy chủ phân cấp thụt lề.",
        install: "# Định dạng cấu hình static",
        codeTs: "server:\n  port: 3000\n  host: 0.0.0.0\ndatabase:\n  adapter: postgresql",
        codeJs: "server:\n  port: 3000\n  host: 0.0.0.0\ndatabase:\n  adapter: postgresql"
    }
];
