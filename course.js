// 教学楼数据
const buildingData = {
    "博学楼": ["博学楼101", "博学楼104", "博学楼105", "博学楼106", "博学楼107", "博学楼108", "博学楼109", "博学楼110", "博学楼201", "博学楼202", "博学楼203", "博学楼204", "博学楼205", "博学楼206", "博学楼207", "博学楼208", "博学楼209", "博学楼301", "博学楼302", "博学楼304", "博学楼305", "博学楼306", "博学楼309", "博学楼310", "博学楼311", "博学楼312", "博学楼313", "博学楼314", "博学楼401", "博学楼402", "博学楼404", "博学楼405", "博学楼406", "博学楼409", "博学楼410", "博学楼411", "博学楼412", "博学楼413", "博学楼414", "博学楼501", "博学楼502", "博学楼504", "博学楼505", "博学楼506", "博学楼713", "博学楼805", "博学楼808", "博学楼904（摄影实验室）",],
    "笃行楼": ["101", "102", "103", "104", "201", "202", "203", "204", "301", "302", "303", "304", "401", "402", "403", "404"],
    "励学楼": ["101", "102", "103", "104", "105", "106", "201", "202", "203", "204", "205", "206", "301", "302", "303", "304"],
    "厚德楼": ["101", "102", "103", "104", "201", "202", "203", "204", "301", "302"],
    "乐学楼": ["101", "102", "103", "104", "201", "202", "203", "204"],
    "敏学楼": ["101", "102", "103", "201", "202", "203", "301", "302"],
    "勤学楼": ["101", "102", "103", "104", "201", "202", "203", "204"],
    "实验楼": ["101实验室", "102实验室", "103实验室", "201实验室", "202实验室", "301机房", "302机房"],
    "拓新楼": ["101", "102", "103", "104", "201", "202", "203", "204"],
    "同心楼": ["101", "102", "103", "201", "202", "203"],
    "致学楼": ["101", "102", "103", "104", "201", "202"],
    "艺术坊": ["艺术坊101（造型基础实验室）","艺术坊102（竹木加工实验室）","艺术坊201（玩具造型实验室）","艺术坊202（玩具体验实验室）",]
};

// 年级数据 - 直接使用班级名称
const gradeData = {
    "2025": ["25级数据科学与大数据技术1班", "25级数据科学与大数据技术2班", "25级计算机科学与技术1班", "25级计算机科学与技术2班", "25级软件工程1班", "25级软件工程2班", "25级人工智能1班", "25级人工智能2班"],
    "2024": ["24级数据科学与大数据技术1班", "24级数据科学与大数据技术2班", "24级计算机科学与技术1班", "24级计算机科学与技术2班", "24级软件工程1班", "24级软件工程2班", "24级人工智能1班", "24级人工智能2班"],
    "2023": ["23级数据科学与大数据技术1班", "23级数据科学与大数据技术2班", "23级计算机科学与技术1班", "23级计算机科学与技术2班", "23级软件工程1班", "23级软件工程2班", "23级人工智能1班", "23级人工智能2班"]
};

// 课程数据 - 直接使用班级名称作为键
const courseData = {
    "25级数据科学与大数据技术1班": {
        "1": {
            "2": { course: "数学分析IIa", teacher: "欧柳曼", weeks: "1-16(周)", location: "笃行楼(SJ2)302", period: "第三四节 [03-04]" },
            "4": { course: "数学分析IIa", teacher: "欧柳曼", weeks: "1-16(周)", location: "笃行楼(SJ2)302", period: "第七八节 [07-08]" },
        },
        "2": {
            "1": { course: "数学分析IIa", teacher: "欧柳曼", weeks: "1-16(周)", location: "笃行楼(SJ2)302", period: "第一二节 [01-02]" },
            "3": { course: "形势与政策 II", teacher: "卢秀芬", weeks: "7,9,12,14(周)", location: "笃行楼(SJ2)312", period: "第五六节 [05-06]" },
        },
        "3": {
            "3": { course: "大学生劳动教育", teacher: "尹来盛", weeks: "1,4,8,12,16(周)", location: "励学楼(SJ1)306", period: "第五六节 [05-06]" },
            "4": { course: "高等代数Ⅱ", teacher: "谭学忠", weeks: "1-16(单周)", location: "笃行楼(SJ2)403", period: "第七八节 [07-08]" },
            "5": { course: "走在前列的广东实践", teacher: "项锐", weeks: "1-16(周)", location: "笃行楼(SJ2)420", period: "第九十节 [09-10]" },
            "6": { course: "马克思主义基本原理", teacher: "王颖", weeks: "1-16(双周)", location: "暂未安排", period: "第十一十二节 [11-12]" },
        },
        "4": {
            "2": { course: "数据科学基础", teacher: "崔紫薇", weeks: "1-16(周)", location: "笃行楼(SJ2)403", period: "第三四节 [03-04]" },
            "3": { course: "Python程序设计与数据采集", teacher: "石琳", weeks: "1-16(周)", location: "笃行楼(SJ2)503", period: "第五六节 [05-06]" },
            "4": { course: "数据科学基础", teacher: "崔紫薇", weeks: "1-16(周)", location: "笃行楼(SJ2)403", period: "第七八节 [07-08]" },
        },
        "5": {
            "1": { course: "高等代数Ⅱ", teacher: "谭学忠", weeks: "1-16(单周)", location: "笃行楼(SJ2)403", period: "第一二节 [01-02]" },
            "2": { course: "Python程序设计与数据采集", teacher: "石琳", weeks: "1-16(周)", location: "笃行楼(SJ2)404", period: "第三四节 [03-04]" },
            "3": { course: "马克思主义基本原理", teacher: "王颖", weeks: "1-16(双周)", location: "拓新楼(SS1)404", period: "第五六节 [05-06]" },
            "4": { course: "思想道德与法治", teacher: "曹康莉", weeks: "1-16(周)", location: "励学楼(SJ1)108", period: "第七八节 [07-08]" },
        },
        "6": {},
        "0": {}
    },
    "25级数据科学与大数据技术2班": {
        "1": {},
        "2": {
            "4": { course: "形势与政策 I", teacher: "陈娟副教授", weeks: "6,8,14,16(周)", location: "笃行楼(SJ2)212", period: "第七八节 [07-08]" }
        },
        "3": {
            "1": { course: "程序设计基础（C语言）", teacher: "陈冰川副教授", weeks: "2-16(周)", location: "笃行楼(SJ2)405", period: "第一二节 [01-02]" },
            "2": { course: "数学分析Ia", teacher: "欧柳曼副教授", weeks: "2-16(周)", location: "励学楼(SJ1)109", period: "第三四节 [03-04]" },
        },
        "4": {
            "1": { course: "数学分析Ia", teacher: "欧柳曼副教授", weeks: "2-16(周)", location: "笃行楼(SJ2)303", period: "第一二节 [01-02]" },
            "2": { course: "人工智能导论", teacher: "刘可", weeks: "2-16(周)", location: "厚德楼(SJ3)110", period: "第三四节 [03-04]" },
            "3": { course: "数学分析Ia", teacher: "欧柳曼副教授", weeks: "2-16(周)", location: "励学楼(SJ1)210", period: "第五六节 [05-06]" },
            "4": { course: "大学生心理健康教育", teacher: "曹秀华副教授", weeks: "2-16(单周)", location: "励学楼(SJ1)306", period: "第七八节 [07-08]" },
            "4_2": { course: "程序设计基础（C语言）", teacher: "陈冰川副教授", weeks: "2-16(双周)", location: "拓新楼204（计算机基础实验室）", period: "第七八节 [07-08]" }
        },
        "5": {
            "4": { course: "湾区财经概论", teacher: "刘艳艳副教授", weeks: "2-16(周)", location: "笃行楼(SJ2)418", period: "第七八节 [07-08]" }
        },
        "6": {},
        "0": {}
    },
    "25级计算机科学与技术1班": {
        "1": {
            "1": { course: "计算机组成原理", teacher: "赵教授", weeks: "2-16(周)", location: "励学楼(SJ1)301", period: "第一二节 [01-02]" }
        },
        "2": {}, "3": {}, "4": {}, "5": {}, "6": {}, "0": {}
    },
    "25级计算机科学与技术2班": {},
    "25级软件工程1班": {},
    "25级软件工程2班": {},
    "25级人工智能1班": {},
    "25级人工智能2班": {},
    "博学楼101": {
        "1": {
            "1": { course: "内部控制", teacher: "雷宇,施赟,赵兴楣", weeks: "1-16(单周)", location: "2023会计学(国际会计ACCA)1班,2023会计学(中外联合培养项目班未赴国外学习)1班,2025会计学（3+2高职本科协同育人项目）1班", period: "第一二节 [01-02]" },
            "1_2": { course: "内部控制", teacher: "赵兴楣", weeks: "1-16(双周)", location: "2023会计学[3-4]班", period: "第一二节 [01-02]" },
            "3": { course: "金融能力与资产建设", teacher: "廖海燕", weeks: "1-16(周)", location: "2023社会工作1班", period: "第五六节 [05-06]" },
            "4": { course: "金融社会学", teacher: "徐靖捷", weeks: "1-16(周)", location: "2023社会工作1班", period: "第七八节 [07-08]" }
        },
        "2": {
            "1": { course: "商业伦理与审计职业道德", teacher: "赵国宇", weeks: "1-16(周)", location: "2023审计学(信息系统审计方向)1班,2023审计学(智能审计)1班", period: "第一二节 [01-02]" },
            "2": { course: "商业伦理与审计职业道德", teacher: "赵国宇", weeks: "1-16(周)", location: "2023审计学1班", period: "第三四节 [03-04]" },
            "3": { course: "形势与政策VI", teacher: "孔维肯", weeks: "6,8,11,13(周)", location: "2023金融学(CFA实验区)1班,2023金融科技1班", period: "第五六节 [05-06]" },
            "4": { course: "形势与政策VI", teacher: "孔维肯", weeks: "6,8,11,13(周)", location: "2024金融学（中外联合培养项目班）[1-2]班,2024税收学（中外联合培养项目班）1班", period: "第七八节 [07-08]" },
        },
        "3": {},
        "4": {
            "2": { course: "学术论文写作", teacher: "许峰", weeks: "1-8(周)", location: "2023汉语言文学(商务文秘)1班,2023汉语言文学(创意写作)1班", period: "第三四节 [03-04]" },
        },
        "5": {
            "1": { course: "内部控制", teacher: "李丽青", weeks: "1-16(双周)", location: "2023会计学[1-2]班", period: "第一二节 [01-02]" },
            "1_2": { course: "公司治理与风险管理(SBL1)", teacher: "李丽青", weeks: "1-16(单周)", location: "2023会计学(国际会计ACCA)1班,2023会计学(中外联合培养项目班未赴国外学习)1班", period: "第一二节 [01-02]" },
            "2": { course: "内部控制", teacher: "雷宇,施赟,赵兴楣", weeks: "1-16(周)", location: "2023会计学(国际会计ACCA)1班,2023会计学(中外联合培养项目班未赴国外学习)1班,2025会计学（3+2高职本科协同育人项目）1班", period: "第三四节 [03-04]" },
            "3": { course: "内部控制", teacher: "李丽青", weeks: "1-16(周)", location: "2023会计学[1-2]班", period: "第五六节 [05-06]" },
        },
        "6": {},
        "0": {}
    }
};

// 星期映射
const weekdayMap = {
    "0": "星期日",
    "1": "星期一",
    "2": "星期二",
    "3": "星期三",
    "4": "星期四",
    "5": "星期五",
    "6": "星期六"
};

// 节次映射
const periodMap = {
    "1": "第一二节",
    "2": "第三四节",
    "3": "第五六节",
    "4": "第七八节",
    "5": "第九十节",
    "6": "第十一十二节"
};

// DOM元素
const locationTypeSelect = document.getElementById('location-type');
const locationSecondSelect = document.getElementById('location-second');
const locationThirdSelect = document.getElementById('location-third');
const queryBtn = document.getElementById('query-btn');
const resetBtn = document.getElementById('reset-btn');
const tryAgainBtn = document.getElementById('try-again-btn');
const resultSection = document.getElementById('result-section');
const noResultSection = document.getElementById('no-result-section');
const resultBody = document.getElementById('result-body');
const queryInfo = document.getElementById('query-info');
const courseDetail = document.getElementById('course-detail');

// 详细信息元素
const detailCourse = document.getElementById('detail-course');
const detailTeacher = document.getElementById('detail-teacher');
const detailWeeks = document.getElementById('detail-weeks');
const detailLocation = document.getElementById('detail-location');
const detailPeriod = document.getElementById('detail-period');
const detailWeekday = document.getElementById('detail-weekday');

// 第一级选择变化事件
locationTypeSelect.addEventListener('change', function () {
    const type = this.value;
    locationSecondSelect.innerHTML = '<option value="">请选择</option>';
    locationThirdSelect.innerHTML = '<option value="">请先选择上级选项</option>';
    locationThirdSelect.disabled = true;

    if (type === 'building') {
        locationSecondSelect.disabled = false;
        // 添加教学楼选项
        for (const building in buildingData) {
            const option = document.createElement('option');
            option.value = building;
            option.textContent = building;
            locationSecondSelect.appendChild(option);
        }
    } else if (type === 'grade') {
        locationSecondSelect.disabled = false;
        // 添加年级选项
        for (const grade in gradeData) {
            const option = document.createElement('option');
            option.value = grade;
            option.textContent = grade + '级';
            locationSecondSelect.appendChild(option);
        }
    } else {
        locationSecondSelect.disabled = true;
        locationThirdSelect.disabled = true;
    }
});

// 第二级选择变化事件
locationSecondSelect.addEventListener('change', function () {
    const type = locationTypeSelect.value;
    const secondValue = this.value;
    locationThirdSelect.innerHTML = '<option value="">请选择</option>';

    if (type === 'building' && secondValue && buildingData[secondValue]) {
        locationThirdSelect.disabled = false;
        // 添加教室选项（修正value值）
        buildingData[secondValue].forEach(room => {
            const option = document.createElement('option');
            option.value = room;
            option.textContent = room + '教室';
            locationThirdSelect.appendChild(option);
        });
    } else if (type === 'grade' && secondValue && gradeData[secondValue]) {
        locationThirdSelect.disabled = false;
        // 添加班级选项（直接使用班级名称）
        gradeData[secondValue].forEach(clsName => {
            const option = document.createElement('option');
            option.value = clsName;
            option.textContent = clsName;
            locationThirdSelect.appendChild(option);
        });
    } else {
        locationThirdSelect.disabled = true;
    }
});

// 第三级选择自定义选项
locationThirdSelect.addEventListener('change', function () {
    if (this.value === "custom") {
        const customValue = prompt("请输入自定义名称（例如：励学楼101 或 25级数据科学与大数据技术1班）：");
        if (customValue) {
            const option = document.createElement('option');
            option.value = customValue;
            option.textContent = customValue;
            option.selected = true;
            this.innerHTML = '';
            this.appendChild(option);
        } else {
            this.selectedIndex = 0;
        }
    }
});

// 查询按钮点击事件
queryBtn.addEventListener('click', function () {
    // 获取查询参数
    const type = locationTypeSelect.value;
    const secondValue = locationSecondSelect.value;
    const thirdValue = locationThirdSelect.value;

    // 验证基本选择
    if (!type || !secondValue || !thirdValue) {
        alert('请完成所有必要选择');
        return;
    }

    // 执行查询
    if (type === 'building') {
        executeBuildingQuery(secondValue, thirdValue);
    } else if (type === 'grade') {
        executeGradeQuery(secondValue, thirdValue);
    }
});

// 教学楼查询执行函数
function executeBuildingQuery(buildingName, locationValue) {
    // 隐藏所有结果区域
    resultSection.classList.add('hidden');
    noResultSection.classList.add('hidden');

    // 清空结果表格
    resultBody.innerHTML = '';

    let hasResult = false;

    // 生成查询信息
    queryInfo.textContent = `查询条件：${locationValue}`;

    // 收集所有符合条件的课程（直接读取教室对应的课程数据）
    const locationCourses = {};
    // 从courseData中获取当前教室的课程数据（如courseData["博学楼101"]）
    const targetRoomCourses = courseData[locationValue] || {};

    // 遍历教室课程数据，填充到locationCourses
    for (const weekdayKey in targetRoomCourses) {
        const dayCourses = targetRoomCourses[weekdayKey];
        for (const periodKey in dayCourses) {
            const course = dayCourses[periodKey];
            if (!locationCourses[weekdayKey]) {
                locationCourses[weekdayKey] = {};
            }
            if (!locationCourses[weekdayKey][periodKey]) {
                locationCourses[weekdayKey][periodKey] = [];
            }
            // 补充课程关联的班级信息（从原location字段提取，因原数据中location存的是班级）
            locationCourses[weekdayKey][periodKey].push({
                ...course,
                className: course.location, // 原location字段存储的是班级，这里复用为className
                classCode: course.location
            });
            hasResult = true;
        }
    }

    // 生成表格（展示整周的课程表）
    for (let period = 1; period <= 6; period++) {
        const periodName = periodMap[period];
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-50 transition-custom';

        // 节次列
        const periodCell = document.createElement('td');
        periodCell.className = 'px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50';
        periodCell.textContent = periodName;
        row.appendChild(periodCell);

        // 星期列（一到日）
        for (let weekday = 1; weekday <= 7; weekday++) {
            const weekdayKey = weekday === 7 ? '0' : weekday.toString();
            const cell = document.createElement('td');
            cell.className = 'px-4 py-3 whitespace-normal text-sm text-gray-500 border-r border-gray-100';

            const dayCourses = locationCourses[weekdayKey] || {};
            const courses = [];

            // 查找该节次的所有课程
            const targetKeys = [...new Set([period.toString(),`${period}_2`,`${period}_${period + 1}`])];
            targetKeys.forEach(key => {
                if (dayCourses[key]) {
                    courses.push(...dayCourses[key]);
                }
            });

            if (courses.length > 0) {
                hasResult = true;
                cell.className = 'px-4 py-3 whitespace-normal text-sm border-r border-gray-100 bg-green-50';

                let courseHtml = '';
                courses.forEach((course, index) => {
                    const divider = index < courses.length - 1 ? '<div class="my-2 border-b border-green-100"></div>' : '';
                    courseHtml += `
                        <div class="font-medium text-green-700 cursor-pointer course-item ${index > 0 ? 'mt-3' : ''}" 
                             data-class="${course.className}" 
                             data-weekday="${weekdayKey}" 
                             data-period="${period}"
                             data-course="${course.course}"
                             data-teacher="${course.teacher}"
                             data-weeks="${course.weeks}"
                             data-location="${locationValue}"> <!-- 地点显示为当前查询的教室 -->
                            ${course.course}
                        </div>
                        <div class="text-xs text-gray-500 mt-1">${course.teacher}</div>
                        <div class="text-xs text-gray-500 mt-1">${course.className}</div> <!-- 显示上课班级 -->
                        <div class="text-xs text-gray-400 mt-1">${course.weeks}</div>
                        ${divider}
                    `;
                });
                cell.innerHTML = courseHtml;
            } else {
                cell.innerHTML = '<span class="text-gray-300">--</span>';
            }
            row.appendChild(cell);
        }
        resultBody.appendChild(row);

        // 添加分隔线
        if (period < 6) {
            const separatorRow = document.createElement('tr');
            const separatorCell = document.createElement('td');
            separatorCell.className = 'px-6 py-1';
            separatorCell.colSpan = 8;
            separatorCell.innerHTML = '<div class="h-px bg-gray-100"></div>';
            separatorRow.appendChild(separatorCell);
            resultBody.appendChild(separatorRow);
        }
    }

    // 显示结果或无结果提示
    if (hasResult) {
        resultSection.classList.remove('hidden');
        courseDetail.classList.add('hidden');
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        noResultSection.classList.remove('hidden');
        noResultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// 年级查询执行函数
function executeGradeQuery(gradeName, className) {
    // 隐藏所有结果区域
    resultSection.classList.add('hidden');
    noResultSection.classList.add('hidden');

    // 清空结果表格
    resultBody.innerHTML = '';

    let hasResult = false;

    // 生成查询信息（直接使用班级名称）
    queryInfo.textContent = `查询条件：${className}`;

    // 获取对应班级的课程数据（直接使用班级名称作为键）
    const classCourses = courseData[className] || {};

    // 生成表格（展示整周的课程表）
    for (let period = 1; period <= 6; period++) {
        const periodName = periodMap[period];
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-50 transition-custom';

        // 节次列
        const periodCell = document.createElement('td');
        periodCell.className = 'px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50';
        periodCell.textContent = periodName;
        row.appendChild(periodCell);

        // 星期列（一到日）
        for (let weekday = 1; weekday <= 7; weekday++) {
            const weekdayKey = weekday === 7 ? '0' : weekday.toString();
            const weekdayName = weekdayMap[weekdayKey];

            const cell = document.createElement('td');
            cell.className = 'px-4 py-3 whitespace-normal text-sm text-gray-500 border-r border-gray-100';

            // 获取课程数据
            const dayCourses = classCourses[weekdayKey] || {};
            const courses = [];
            const courseKeys = new Set();

            // 定义需要匹配的键
            const targetKeys = [...new Set([
                period.toString(),
                `${period}_2`,
                `${period}_${period + 1}`
              ])];

            // 收集课程
            targetKeys.forEach(key => {
                if (dayCourses[key]) {
                    const courseId = `${dayCourses[key].course}_${dayCourses[key].weeks}_${dayCourses[key].teacher}`;
                    if (!courseKeys.has(courseId)) {
                        courses.push(dayCourses[key]);
                        courseKeys.add(courseId);
                    }
                }
            });

            if (courses.length > 0) {
                hasResult = true;
                cell.className = 'px-4 py-3 whitespace-normal text-sm border-r border-gray-100 bg-blue-50';

                let courseHtml = '';
                courses.forEach((course, index) => {
                    const divider = index < courses.length - 1 ? '<div class="my-2 border-b border-blue-100"></div>' : '';
                    courseHtml += `
                        <div class="font-medium text-primary cursor-pointer course-item ${index > 0 ? 'mt-3' : ''}" 
                             data-class="${className}" 
                             data-weekday="${weekdayKey}" 
                             data-period="${period}"
                             data-course="${course.course}"
                             data-teacher="${course.teacher}"
                             data-weeks="${course.weeks}"
                             data-location="${course.location}">
                            ${course.course}
                        </div>
                        <div class="text-xs text-gray-500 mt-1">${course.teacher}</div>
                        <div class="text-xs text-gray-400 mt-1">${course.location}</div>
                        <div class="text-xs text-gray-400 mt-1">${course.weeks}</div>
                        ${divider}
                    `;
                });

                cell.innerHTML = courseHtml;
            } else {
                cell.innerHTML = '<span class="text-gray-300">--</span>';
            }

            row.appendChild(cell);
        }

        resultBody.appendChild(row);

        // 添加分隔线
        if (period < 6) {
            const separatorRow = document.createElement('tr');
            const separatorCell = document.createElement('td');
            separatorCell.className = 'px-6 py-1';
            separatorCell.colSpan = 8;
            separatorCell.innerHTML = '<div class="h-px bg-gray-100"></div>';
            separatorRow.appendChild(separatorCell);
            resultBody.appendChild(separatorRow);
        }
    }

    // 显示结果或无结果提示
    if (hasResult) {
        resultSection.classList.remove('hidden');
        courseDetail.classList.add('hidden');
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        noResultSection.classList.remove('hidden');
        noResultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// 重置按钮点击事件
resetBtn.addEventListener('click', function () {
    // 重置所有选择器
    locationTypeSelect.value = '';
    locationSecondSelect.innerHTML = '<option value="">请先选择类型</option>';
    locationSecondSelect.disabled = true;
    locationThirdSelect.innerHTML = '<option value="">请先选择上级选项</option>';
    locationThirdSelect.disabled = true;

    // 隐藏结果区域
    resultSection.classList.add('hidden');
    noResultSection.classList.add('hidden');

    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 重新查询按钮点击事件
tryAgainBtn.addEventListener('click', function () {
    noResultSection.classList.add('hidden');
    locationTypeSelect.focus();

    // 滚动到查询区域
    document.querySelector('#query-btn').scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// 课程项点击事件（事件委托）
resultBody.addEventListener('click', function (e) {
    const courseItem = e.target.closest('.course-item');
    if (courseItem) {
        // 显示详情卡片
        courseDetail.classList.remove('hidden');

        // 填充详情数据
        detailCourse.textContent = courseItem.dataset.course;
        detailTeacher.textContent = courseItem.dataset.teacher;
        detailWeeks.textContent = courseItem.dataset.weeks;
        detailLocation.textContent = courseItem.dataset.location;
        detailPeriod.textContent = periodMap[courseItem.dataset.period];
        detailWeekday.textContent = weekdayMap[courseItem.dataset.weekday];

        // 滚动到详情区域
        courseDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // 高亮选中的课程项
        document.querySelectorAll('.course-item').forEach(item => {
            item.classList.remove('bg-primary/20', 'rounded', 'p-1');
        });
        courseItem.classList.add('bg-primary/20', 'rounded', 'p-1');
    }
});

// 页面加载完成后的动画效果
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('opacity-100');
            section.classList.remove('opacity-0', 'translate-y-4');
        }, 100 * index);
    });
});