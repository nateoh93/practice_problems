# Problem 1:
# Given a pattern and a string str, determine if str follows the same pattern.

# Example 1
# Input: pattern = "abba", str = "dog cat cat dog"
# Output: true



# Example 2
# Input: pattern = "abba", str = "dog cat cat fish"
# Output: false


# Example 3
# Input: pattern = "aaaa", str = "dog cat cat dog"
# Output: false


# Example 4
# Input: pattern = "abba", str = "dog dog dog dog"
# Output: false
# You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space. Can you solve it in O(N) time and O(1) space?

#split the string by the spaces
#iterate through teh array and take the first letter of every element
#uniq = 1
#check if it's a palindrome

def same_pattern?(pattern, str)
    str_arr = str.split(" ")
    new_str = []
    str_arr.each { |word| new_str << word[0]}
    new_pattern = pattern.split("")

    return true if new_pattern.uniq.length == 1 && new_str.uniq.length == 1

    # return true if (pattern == pattern.reverse && new_str == new_str.reverse) && ((new_pattern.uniq.length == 1 && new_str.uniq.length != 1) || (new_pattern.uniq.length != 1 && new_str.uniq.length == 1))
    false
end


# p same_pattern?("abba", "dog cat cat dog") #== true
# p same_pattern?("abba", "dog cat cat fish") #== false
# p same_pattern?("aaaa", "dog cat cat dog") #== false
# p same_pattern?("abba", "dog dog dog dog") #== false
# abba
# a ==> [0,3]
# b ==> [1,2]

# dog cat cat dog
# dog ==> [0,3]
# cat [1,2]




# Problem 2:
# Given two strings S and T, return if they are equal when both are typed into empty text editors. In this case, # indicates a backspace character.

# Example 1
# Input: S = "ab#c", T = "ad#c"
# Output: true
# Explanation: Both S and T become "ac".

# Example 2
# Input: S = "ab##", T = "c#d#"
# Output: true
# Explanation: Both S and T become "".

# Example 3
# Input: S = "a##c", T = "#a#c"
# Output: true
# Explanation: Both S and T become "c".

# Example 4
# Input: S = "a#c", T = "b"
# Output: false
# Explanation: S becomes "c" while T becomes "b".
# Note:
# 1. 1 <= S.length <= 200
# 2. 1 <= T.length <= 200
# 3. S and T only contain lowercase letters and '#' characters.
# Can you solve it in O(N) time and O(1) space?


#iterate thru each char of the first string with index
#identify if char == '#' 
#delete the ele at that index and the one before
#apply the same logic on the second string and check if at the end of the iteration they are equal to each other

# def hashtag_deleter(str1, str2)
#     count = 0
#     (1...str1.length).each do |i|
#         if str[i] == '#'
#             while str[i] = '#'
#                 count += 1
#             end
#             str1[i] = ""
#             str1[i - 1] = ""
#         end
#     end

#     (1...str2.length).each do |i|
#             str2[i] = ""
#             str2[i - 1] = ""
#         end
#     end
#     str1 == str2
# end

def hashtag_deleter(str1, str2)
    hashtag_deleted = false

    while !hashtag_deleted
        (1...str1.length).each do |i|
            if str1[i] == '#'
                str1[i] = ""
                str1[i - 1] = ""
                hashtag_deleted = true
                break
            end
        end

        (1...str2.length).each do |i|
            if str2[i] == '#'
                str2[i] = ""
                str2[i - 1] = ""
                hashtag_deleted = true
                break
            end
        end
    end

    str1 == str2
end
str1 = "ab#c"
str2 = "ad#c"
p hashtag_deleter(str1, str2)
#true

str1 = "ab##"
str2 = "c#d#"
p hashtag_deleter(str1, str2)
#true

str1 = "a##c"
str2 = "#a#c"
p hashtag_deleter(str1, str2)
#true

str1 = "a#c" 
str2 = "b"
p hashtag_deleter(str1, str2)
#false
#whiteboarding above - try again
####################################################
require "byebug"
# Problem 1:
# Given a pattern and a string str, determine if str follows the same pattern.

# Example 1
# Input: pattern = "abba", str = "dog cat cat dog"
# Output: true



# Example 2
# Input: pattern = "abba", str = "dog cat cat fish"
# Output: false


# Example 3
# Input: pattern = "aaaa", str = "dog cat cat dog"
# Output: false


# Example 4
# Input: pattern = "abba", str = "dog dog dog dog"
# Output: false
# You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space. Can you solve it in O(N) time and O(1) space?

#split the string by the spaces
#iterate through teh array and take the first letter of every element
#uniq = 1
#check if it's a palindrome

def same_pattern?(pattern, str)
    str_arr = str.split(" ")
    new_str = []
    str_arr.each { |word| new_str << word[0]}
    new_pattern = pattern.split("")

    return true if new_pattern.uniq.length == 1 && new_str.uniq.length == 1

    # return true if (pattern == pattern.reverse && new_str == new_str.reverse) && ((new_pattern.uniq.length == 1 && new_str.uniq.length != 1) || (new_pattern.uniq.length != 1 && new_str.uniq.length == 1))
    false
end


# p same_pattern?("abba", "dog cat cat dog") #== true
# p same_pattern?("abba", "dog cat cat fish") #== false
# p same_pattern?("aaaa", "dog cat cat dog") #== false
# p same_pattern?("abba", "dog dog dog dog") #== false
# abba
# a ==> [0,3]
# b ==> [1,2]

# dog cat cat dog
# dog ==> [0,3]
# cat [1,2]




# Problem 2:
# Given two strings S and T, return if they are equal when both are typed into empty text editors. In this case, # indicates a backspace character.

# Example 1
# Input: S = "ab#c", T = "ad#c"
# Output: true
# Explanation: Both S and T become "ac".

# Example 2
# Input: S = "ab##", T = "c#d#"
# Output: true
# Explanation: Both S and T become "".

# Example 3
# Input: S = "a##c", T = "#a#c"
# Output: true
# Explanation: Both S and T become "c".

# Example 4
# Input: S = "a#c", T = "b"
# Output: false
# Explanation: S becomes "c" while T becomes "b".
# Note:
# 1. 1 <= S.length <= 200
# 2. 1 <= T.length <= 200
# 3. S and T only contain lowercase letters and '#' characters.
# Can you solve it in O(N) time and O(1) space?


#iterate thru each char of the first string with index
#identify if char == '#' 
#delete the ele at that index and the one before
#apply the same logic on the second string and check if at the end of the iteration they are equal to each other

# def hashtag_deleter(str1, str2)
#     count = 0
#     (1...str1.length).each do |i|
#         if str[i] == '#'
#             while str[i] = '#'
#                 count += 1
#             end
#             str1[i] = ""
#             str1[i - 1] = ""
#         end
#     end

#     (1...str2.length).each do |i|
#             str2[i] = ""
#             str2[i - 1] = ""
#         end
#     end
#     str1 == str2
# end

def hashtag_deleter(str1, str2)
    hashtag_deleted = false

    while !hashtag_deleted
        (1...str1.length).each do |i|
            if str1[i] == '#'
                str1[i] = ""
                str1[i - 1] = ""
                hashtag_deleted = true
                break
            end
        end

        (1...str2.length).each do |i|
            if str2[i] == '#'
                str2[i] = ""
                str2[i - 1] = ""
                hashtag_deleted = true
                break
            end
        end
    end

    str1 == str2
end
str1 = "ab#c"
str2 = "ad#c"
p hashtag_deleter(str1, str2)
#true

str1 = "ab##"
str2 = "c#d#"
p hashtag_deleter(str1, str2)
#true

str1 = "a##c"
str2 = "#a#c"
p hashtag_deleter(str1, str2)
#true

str1 = "a#c" 
str2 = "b"
p hashtag_deleter(str1, str2)
#false

#whiteboarding above retry
################################################################


# some_array = [1]
# some_hash = { some_array => 'secrets' }
# some_array << 2
# some_hash[some_array]

def divisible(num, div)
    return [] if num < div
    (num % div == 0) ? (divisible(num-1, div) + [num]) : (divisible(num-1, div))
end

# p divisible(4, 2)
# p divisible(3, 1)
# p divisible(9, 3)

def pascal(num)
    return [1] if num == 1
    # return [1,1] if num == 2
    result = [1]
    (0).upto(pascal(num-1).length-2).each do |i|
         result << pascal(num-1)[i] + pascal(num-1)[i+1]
    end
    result << 1

end

# p pascal(3)

def my_min(list)
    min = list.first
    # debugger
    (1...list.length).each do |i|
        min = list[i] if min > list[i]
    end
    min
end

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min(list)  # =>  -5

def largest_contiguous_subsum(list)
    largest = list.first
    current = list.first

    (1...list.length).each do |i|
        current = 0 if current < 1
        current += list[i]
        largest = current if current > largest
    end

    largest
end

# list = [2, 3, -6, 7, -6, 7]
# p largest_contiguous_subsum(list) # => 8 (from [7, -6, 7])

def first_anagram?(str_1, str_2)
    str_1.split("").permutation.to_a.each do |anagrams|
        return true if str_2 == anagrams.join("")
    end
    false
end
# p first_anagram?("gizmo", "sally")    #=> false
# p first_anagram?("elvis", "lives")    #=> true

def second_anagram?(str_1, str_2)
    new_str = str_2.split("")
    str_1.each_char.with_index do |char, i|
        index = new_str.find_index(char)
        new_str.delete_at(index) if index
    end

    new_str.empty?
end

# p second_anagram?("gizmo", "sally")    #=> false
# p second_anagram?("elvis", "lives")    #=> true

def third_anagram?(str_1, str_2)
    str_1.split("").sort == str_2.split("").sort
end

# p third_anagram?("gizmo", "sally")    #=> false
# p third_anagram?("elvis", "lives")    #=> true

def fourth_anagram?(str_1, str_2)
    hash = Hash.new(0)
    str_1.each_char { |char| hash[char] += 1 }
    str_2.each_char { |char| hash[char] -= 1 }

    hash.all? { |k, v| v == 0}

end

# p fourth_anagram?("gizmo", "sally")    #=> false
# p fourth_anagram?("elvis", "lives")    #=> true

def two_sum?(arr, target_sum)
    (0...arr.length).each do |i|
        (0...arr.length).each do |i2|
            return true if i2 > i && (arr[i] + arr[i2] == target_sum)
        end
    end
    false
end

arr = [0, 1, 5, 7]
# p two_sum?(arr, 6) # => should be true
# p two_sum?(arr, 10) # => should be false

def two_sum?(arr, target_sum)
    length = arr.dup.length
    arr.sort!
    left = arr.shift
    right = arr.pop
    # debugger
    
    length.times do
        return true if left + right == target_sum

        if left + right > target_sum
            right = arr.pop
        else
            left = arr.shift
        end
    end

    false
end

# arr = [0, 5, 1, 7]
# p two_sum?(arr, 6) # => should be true
# p two_sum?(arr, 10) # => should be false

def two_sum?(arr, target_sum)
    hash = {}
    arr.each_with_index do |ele, idx|
        element, index = hash[target_sum-ele]
        return [idx, index] if element
        hash[ele] = ele, idx
    end
    nil
end

# arr = [0, 5, 1, 7]
# p two_sum?(arr, 6) # => should be true
# p two_sum?(arr, 10) # => should be false

def largest_contiguous_subsum(list)
    largest = list.first
    current = list.first

    (1...list.length).each do |i|
        current += list[i]
        largest = current if current > largest
        current = 0 if current < 0
    end
    largest
end

# list = [2, 3, -6, 7, -6, 7]
# p largest_contiguous_subsum(list) # => 8 (from [7, -6, 7])

def first_anagram?(str_1, str_2)
    str_1.split("").permutation.to_a.each do |permute|
        return true if str_2 == permute.join("")
    end
    false
end

# p first_anagram?("gizmo", "sally")    #=> false
# p first_anagram?("elvis", "lives")    #=> true

def two_sum?(arr, target_sum)
    (0...arr.length).each do |i|
        (0...arr.length).each do |i2|
            return true if i2 > i && (arr[i] + arr[i2] == target_sum)
        end
    end

    false
end

# arr = [0, 1, 5, 7]
# p two_sum?(arr, 6) # => should be true
# p two_sum?(arr, 10) # => should be false

def two_sum?(arr, target_sum)
    length = arr.dup
    arr.sort!
    left = arr.shift
    right = arr.pop
    
    length.length.times do
        return true if (left + right) == target_sum
        if (left + right) > target_sum
            right = arr.shift
        else
            left = arr.shift
        end
    end
    false
end

# arr = [0, 5, 1, 7]
# p two_sum?(arr, 6) # => should be true
# p two_sum?(arr, 10) # => should be false

def two_sum?(arr, target_sum)
    hash = {}
    # debugger
    arr.each_with_index do |ele, idx|
        element, i = hash[target_sum-ele]
        return [idx, i] if element
        hash[ele] = ele, idx
    end
    nil
end

arr = [0, 7, 5, 1]
# p two_sum?(arr, 6) # => should be true
# p two_sum?(arr, 10) # => should be false

