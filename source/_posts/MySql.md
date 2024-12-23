---
title: MySql Note
abbrlink: 16097
date: 2024-12-05 16:47:43
tags:
categories:
  - MySql
cover: https://images.maxiansen.top/blog/public/img/dm/dm13.jpg
---

# MySQL 学习笔记

## MySQL 简介

MySQL 是一种开源的关系型数据库管理系统（RDBMS），广泛应用于Web应用和各种软件系统中。

### 特点

- **开源免费**：MySQL 社区版可以免费使用。
- **跨平台支持**：支持 Windows、Linux、macOS 等多种操作系统。
- **高性能**：支持高速的读写操作。
- **扩展性强**：支持插件式存储引擎。
- **丰富的功能**：支持事务、视图、触发器、存储过程等。

### 登录数据库

```bash
mysql -u 用户名 -p
```

### 数据库基本命令

- 查看所有数据库：

  ```sql
  SHOW DATABASES;
  ```

- 创建数据库：

  ```sql
  CREATE DATABASE 数据库名;
  ```

- 使用数据库：

  ```sql
  USE 数据库名;
  ```

- 删除数据库：

  ```sql
  DROP DATABASE 数据库名;
  ```

### 数据表基本命令

- 查看所有数据表：

  ```sql
  SHOW TABLES;
  ```

- 创建数据表：

  ```sql
  CREATE TABLE 表名 (
      列名 数据类型 [约束],
      ...
  );
  ```

  **示例：**

  ```sql
  CREATE TABLE users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(50) NOT NULL,
      password VARCHAR(100) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

- 查看表结构：

  ```sql
  DESCRIBE 表名;
  ```

- 删除数据表：

  ```sql
  DROP TABLE 表名;
  ```

- 修改表结构：

  ```sql
  ALTER TABLE 表名 ADD 列名 数据类型;
  ALTER TABLE 表名 DROP COLUMN 列名;
  ALTER TABLE 表名 MODIFY COLUMN 列名 新数据类型;
  ```

## 数据操作

### 插入数据

```sql
INSERT INTO 表名 (列1, 列2, ...) VALUES (值1, 值2, ...);
```

**示例：**

```sql
INSERT INTO users (username, password) VALUES ('testuser', 'password123');
```

### 查询数据

```sql
SELECT 列名 FROM 表名 [WHERE 条件] [ORDER BY 列名 ASC|DESC] [LIMIT 数量];
```

**示例：**

- 查询所有数据：

  ```sql
  SELECT * FROM users;
  ```

- 带条件查询：

  ```sql
  SELECT username FROM users WHERE id > 5;
  ```

- 排序查询：

  ```sql
  SELECT * FROM users ORDER BY created_at DESC;
  ```

- 限制查询条数：

  ```sql
  SELECT * FROM users LIMIT 10;
  ```

### 更新数据

```sql
UPDATE 表名 SET 列1=值1, 列2=值2 WHERE 条件;
```

**示例：**

```sql
UPDATE users SET password='newpassword' WHERE id=1;
```

### 删除数据

```sql
DELETE FROM 表名 WHERE 条件;
```

**示例：**

```sql
DELETE FROM users WHERE id=10;
```

## 约束

- **PRIMARY KEY**：主键，唯一标识一行数据。
- **FOREIGN KEY**：外键，维护表之间的关系。
- **NOT NULL**：列值不能为空。
- **UNIQUE**：列值必须唯一。
- **DEFAULT**：设置默认值。
- **CHECK**：限制列值的范围（MySQL 8.0+ 支持）。

**示例：**

```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    user_id INT,
    order_date DATE NOT NULL,
    total_amount DECIMAL(10, 2) DEFAULT 0.00,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## 高级功能

### 索引

索引用于加速查询。

- 创建索引：

  ```sql
  CREATE INDEX 索引名 ON 表名 (列名);
  ```

- 删除索引：

  ```sql
  DROP INDEX 索引名 ON 表名;
  ```

- 查看索引：

  ```sql
  SHOW INDEX FROM 表名;
  ```

### 视图

视图是虚拟表。

- 创建视图：

  ```sql
  CREATE VIEW 视图名 AS SELECT 语句;
  ```

- 查询视图：

  ```sql
  SELECT * FROM 视图名;
  ```

- 删除视图：

  ```sql
  DROP VIEW 视图名;
  ```

### 事务

事务用于确保数据的一致性。

- 开启事务：

  ```sql
  START TRANSACTION;
  ```

- 提交事务：

  ```sql
  COMMIT;
  ```

- 回滚事务：

  ```sql
  ROLLBACK;
  ```

- 设置自动提交：

  ```sql
  SET AUTOCOMMIT = 0; -- 禁用自动提交
  SET AUTOCOMMIT = 1; -- 启用自动提交
  ```

### 存储过程

存储过程是存储在数据库中的 SQL 脚本。

- 创建存储过程：

  ```sql
  CREATE PROCEDURE 存储过程名 (参数列表)
  BEGIN
      SQL 语句;
  END;
  ```

- 调用存储过程：

  ```sql
  CALL 存储过程名(参数);
  ```

- 删除存储过程：

  ```sql
  DROP PROCEDURE 存储过程名;
  ```

### 触发器

触发器是在特定操作（INSERT、UPDATE、DELETE）发生时自动执行的 SQL 代码。

- 创建触发器：

  ```sql
  CREATE TRIGGER 触发器名 BEFORE|AFTER 操作 ON 表名
  FOR EACH ROW
  BEGIN
      SQL 语句;
  END;
  ```

- 删除触发器：

  ```sql
  DROP TRIGGER 触发器名;
  ```

## 性能优化

1. **使用索引**：提高查询效率。

2. **避免 SELECT ***：只查询必要的字段。

3. **分库分表**：减轻单库压力。

4. **定期优化表**：

   ```sql
   OPTIMIZE TABLE 表名;
   ```

5. **分析查询性能**：

   ```sql
   EXPLAIN SELECT 语句;
   ```

## 总结

学习 MySQL 需要从基础命令开始，逐步深入到高级功能如事务、索引和存储过程。同时，要关注性能优化，选择适合的数据库设计与查询方案，才能高效管理和使用数据库。