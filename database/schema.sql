-- Newsletter signups
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  parent_or_educator VARCHAR(50),
  subscribed_at TIMESTAMP DEFAULT NOW(),
  source VARCHAR(100) -- 'gorrie-teach-in'
);

-- Contact form submissions
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  organization VARCHAR(255),
  inquiry_type VARCHAR(100), -- 'workshop', 'consulting', 'speaking', 'other'
  message TEXT,
  submitted_at TIMESTAMP DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'new' -- 'new', 'contacted', 'closed'
);

-- Demo session analytics (optional)
CREATE TABLE IF NOT EXISTS demo_sessions (
  id SERIAL PRIMARY KEY,
  session_id UUID UNIQUE,
  started_at TIMESTAMP DEFAULT NOW(),
  total_messages INT DEFAULT 0,
  total_tokens INT DEFAULT 0,
  ended_at TIMESTAMP
);

-- Page analytics
CREATE TABLE IF NOT EXISTS page_views (
  id SERIAL PRIMARY KEY,
  page_path VARCHAR(255),
  referrer VARCHAR(255),
  viewed_at TIMESTAMP DEFAULT NOW(),
  user_agent TEXT
);

-- Poll Votes
CREATE TABLE IF NOT EXISTS poll_votes (
  id SERIAL PRIMARY KEY,
  poll_id VARCHAR(50), -- e.g. 'slide1-usage'
  option_selected VARCHAR(50), -- e.g. 'yes'
  grade VARCHAR(20),
  audience VARCHAR(20),
  created_at TIMESTAMP DEFAULT NOW()
);
