#!/bin/bash
echo "=== ПОИСК НЕПРАВИЛЬНЫХ ПУТЕЙ ==="

echo "1. href с неправильными путями:"
grep -rn "href=\"/login\"" src/ 2>/dev/null || echo "✅ href /login исправлены"
grep -rn "href=\"/register\"" src/ 2>/dev/null || echo "✅ href /register исправлены"

echo -e "\n2. router.push с неправильными путями:"
grep -rn "router.push('/login')" src/ 2>/dev/null || echo "✅ router.push /login исправлены"
grep -rn "router.push('/register')" src/ 2>/dev/null || echo "✅ router.push /register исправлены"
grep -rn "router.push('/account" src/ 2>/dev/null || echo "✅ router.push /account исправлены"

echo -e "\n3. API endpoints с неправильными путями:"
grep -rn "/api/auth/" src/ 2>/dev/null | grep -v "itsolar" || echo "✅ API auth исправлены"
grep -rn "/api/account/" src/ 2>/dev/null | grep -v "itsolar" || echo "✅ API account исправлены" 
grep -rn "/api/company/" src/ 2>/dev/null | grep -v "itsolar" || echo "✅ API company исправлены"

echo -e "\n4. redirect с неправильными путями:"
grep -rn "redirect('/login')" src/ 2>/dev/null || echo "✅ redirect исправлены"
