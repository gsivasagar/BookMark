import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://gxqdyyyacvqgcvwvhuir.supabase.co'
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4cWR5eXlhY3ZxZ2N2d3ZodWlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5NTU5MTksImV4cCI6MjA4NjUzMTkxOX0.F17bR6FBH98OmNyqe37XvqdIulFzXnSQ_g7pUbCES0I'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

async function test() {
    console.log("Fetching bookmarks...")
    const { data, error } = await supabase.from('bookmarks').select('*').limit(1)
    if (error) {
        console.error("Error fetching:", error)
        return
    }
    console.log("Bookmarks keys:", data && data.length > 0 ? Object.keys(data[0]) : "No bookmarks found")
    console.log("Bookmark:", data)
}

test()
